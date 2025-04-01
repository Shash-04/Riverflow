import { db, questionCollection } from "@/models/name";
import { databases } from "@/models/server/config";
import React from "react";
import EditQues from "./EditQues";

// Add this type definition to match Next.js's expectations
type PageProps = {
  params: { quesId: string; quesName: string };
  searchParams?: Record<string, string | string[] | undefined>;
};

// Use the correct type annotation
const Page = async ({ params }: PageProps) => {
  const question = await databases.getDocument(db, questionCollection, params.quesId);

  return <EditQues question={question} />;
};

export default Page;