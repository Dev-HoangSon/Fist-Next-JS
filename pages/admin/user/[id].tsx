import { useRouter } from "next/router";

export default function Login() {
  const router = useRouter();

  console.log(router.query.id);
  return <h1>User</h1>;
}
