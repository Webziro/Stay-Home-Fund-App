import PageMeta from "../../components/common/PageMeta";
import AuthLayout from "./AuthPageLayout";
import SignInForm from "../../components/auth/SignInForm";

export default function SignIn() {
  return (
    <>
      <PageMeta
        title="Stay Home Fund SignIn Dashboard | Stay Home Fund - Admin Dashboard Template"
        description="This is SignIn Tables Dashboard page for Stay Home Fund - Your Financial freedom starts here!"
      />
      <AuthLayout>
        <SignInForm />
      </AuthLayout>
    </>
  );
}
