import { db, questionCollection } from "@/models/name";
import { databases } from "@/models/server/config";
import React from "react";
import EditQues from "./EditQues";

const Page = async (props: { params: { quesId: string; quesName: string } }) => {
    // Ensure params is resolved before using it
    const { quesId } = await Promise.resolve(props.params);

    const question = await databases.getDocument(db, questionCollection, quesId);

    return <EditQues question={question} />;
};

export default Page;
