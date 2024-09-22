import React from "react";

interface FormProps {
  children: React.ReactNode;
}

export default function Form({ children }: FormProps) {
  return <form onSubmit={(e) => e.preventDefault()}>{children}</form>;
}
