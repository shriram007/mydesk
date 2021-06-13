import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const useCheck = (user, role) => {
  const [status, setStatus] = useState();
  const router = useRouter();
  const check = async () => {
    console.log("usecheck")
    const response = await axios.get(`/api/check`);
    const data = response.data;
    setStatus(data);
  };

  useEffect(() => {
    if (user["https://mydesk.app/roles"] !== role) {
      router.replace("/");
    } else {
      check();
      if (status === "denied") {
        router.replace(`/`);
      } else if (status === "mail") {
        router.replace(`/mail`);
      } else if (status === "create") {
        router.replace(`/register_${role}`);
      }
    }
  }, [user]);
};

export default useCheck;
