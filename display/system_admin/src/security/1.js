// Payload.jsx - The guard component that protects routes
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import sessionInstance from "./set_session";

function Payload({ children, requiredRole = null, redirectTo = "/login" }) {
    const [isAuthorized, setIsAuthorized] = useState(null); // null = loading, true/false = decision
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const checkAuthorization = async () => {
            try {
                // Step 1: Sync with backend to verify session
                const isBackendValid = await sessionInstance.syncWithBackend();
                
                if (!isBackendValid) {
                    // Backend says not logged in
                    setIsAuthorized(false);
                    setIsLoading(false);
                    return;
                }

                // Step 2: Get frontend session data
                const sessionData = sessionInstance.getrole();
                
                if (!sessionData.state) {
                    // Frontend says not logged in
                    setIsAuthorized(false);
                    setIsLoading(false);
                    return;
                }

                // Step 3: Check role requirements if specified
                if (requiredRole) {
                    const userRole = sessionData.role;
                    const hasRequiredRole = (userRole === requiredRole || userRole === "admin");
                    
                    if (!hasRequiredRole) {
                        console.log(`Access denied: ${userRole} cannot access ${requiredRole} route`);
                        setIsAuthorized(false);
                        setIsLoading(false);
                        return;
                    }
                }

                // All checks passed
                setIsAuthorized(true);
                setIsLoading(false);
                
            } catch (error) {
                console.error("Authorization check failed:", error);
                setIsAuthorized(false);
                setIsLoading(false);
            }
        };

        checkAuthorization();
    }, [requiredRole]); // Re-run if requiredRole changes

    // Show loading state while checking
    if (isLoading) {
        return (
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh"
            }}>
                <div>Verifying access credentials...</div>
            </div>
        );
    }

    // If not authorized, redirect to login
    if (!isAuthorized) {
        return <Navigate to={redirectTo} replace />;
    }

    // If authorized, render the children components
    return <>{children}</>;
}

export default Payload;