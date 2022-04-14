import { v4 as uuidv4 } from "uuid";

const taskLimitNumber = 5;

export const columnsRawData = [
    {
        id: 1,
        name: "To do",
        limit: taskLimitNumber,
        color: "#A162D8 ",
        taskIds: [
            {
                id: uuidv4(),
                text: "Study React",
                idColumn: 1,
                user: "George",
            },
            {
                id: uuidv4(),
                text: "Study and create Firebase/Firestore",
                idColumn: 1,
                user: "David",
            },
        ],
    },
    {
        id: 2,
        name: "In progress",
        limit: taskLimitNumber,
        color: "#5A9DF9",
        taskIds: [
            { id: uuidv4(), text: "Create blog", idColumn: 2, user: "David" },
        ],
    },
    {
        id: 3,
        name: "Done",
        limit: taskLimitNumber,
        color: "#1387BE",
        taskIds: [
            { id: uuidv4(), text: "Refactor code", idColumn: 3, user: "George" },
            { id: uuidv4(), text: "Meeting", idColumn: 3, user: "George" },
        ],
    },
];
