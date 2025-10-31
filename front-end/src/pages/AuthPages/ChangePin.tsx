//Let have a change pin page for user to change their pin, similar to sign in and sign up pages
import PageMeta from "../../components/common/PageMeta";
import AuthLayout from "./AuthPageLayout";
import ChangePinForm from "../../components/auth/ChangePinForm";

const ChangePinPage = () => {
  return (
    <AuthLayout>
      <PageMeta title="Change Pin" />
      <ChangePinForm />
    </AuthLayout>
  );
};

export default ChangePinPage;