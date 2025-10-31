import PageMeta from "../../components/common/PageMeta";
import AuthLayout from "./AuthPageLayout";
import SignUpForm from "../../components/auth/SignUpForm";

export default function SignUp() {
  return (
    <>
      <PageMeta
        title="Stay Home Fund SignUp Dashboard | Stay Home Fund - Admin Dashboard Template"
        description="This is SignUp Tables Dashboard page for Stay Home Fund - Your Financial freedom starts here!"
      />
      <AuthLayout>
        <SignUpForm />
      </AuthLayout>
    </>
  );
}
