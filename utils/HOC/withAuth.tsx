import { NextComponentType } from "next";
import { useRouter } from "next/router";

const withAuth = (WrappedComponent: NextComponentType) => {
    return (props: any) => {
        if (typeof window !== "undefined") {
            const router = useRouter();
            const accessToken = localStorage.getItem("accessToken");
            if (!accessToken) {
                router.replace("/admin");
                return null;
            }
            return <WrappedComponent {...props} />;
        }
        return null;
    };
};

export default withAuth;