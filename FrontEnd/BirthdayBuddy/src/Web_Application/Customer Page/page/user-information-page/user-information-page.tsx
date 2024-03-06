import CustomerHeaderHome from "../../organisms/customer-header-home/customer-header-home";
import UserInformationTemplate from "../../template/user-information-template/user-information-template";
import CustomerFooterHome from "../../organisms/customer-footer-home/customer-footer-home";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";

function UserInformationPage() {
  return (
    <>
      <header>
        <CustomerHeaderHome />
      </header>
      <div>
        <UserInformationTemplate />
      </div>
      <footer>
        <CustomerFooterHome />
      </footer>
    </>
  );
}
export default UserInformationPage;
