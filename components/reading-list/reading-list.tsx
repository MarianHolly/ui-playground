// typescript

import { Badge } from "./badge";

export type ReadingStatus = "reading" | "completed" | "on-hold" | "dropped" | "planned";

export interface ReadingListItem {
  id: string;
  title: string;
  status: ReadingStatus;
}

// mock data

const readingList = [
  {
    id: "1",
    title: "Vagabond",
    status: "reading",
  },
  {
    id: "2",
    title: "Climber",
    status: "completed",
  },
];

export default function ReadingList() {
  return (
    <div>
      <h1 className="text-2xl font-bold my-2">Reading List</h1>
      <div className="container mx-auto">
        {readingList.map((item) => (
          <Badge
            key={item.id}
            className="m-2"
            variant={
              item.status === "reading"
                ? "default"
                : item.status === "completed"
                ? "secondary"
                : "outline"
            }
          >
            {item.title}
          </Badge>
        ))}

        {/* 
       {readingList.map((item) => (
          <div key={item.id} className="flex flex-row items-center justify-between gap-2 p-2">
            <div className="flex flex-row items-center gap-2">
              <h2 className="text-xl font-bold">{item.title}</h2>
              <div className="flex flex-row items-center gap-2">
                <span className="text-sm text-gray-500">Status:</span>
                <span className="text-sm text-gray-500">{item.status}</span>
              </div>
            </div>
         
            <div className="flex flex-row items-center gap-2">
              <button className="bg-primary text-white rounded-md px-4 py-1">
                Mark as Reading
              </button>
              <button className="bg-secondary text-white rounded-md px-4 py-1">
                Mark as Completed
              </button>
            </div>
          </div>
        ))}
        
        */}
      </div>
    </div>
  );
}
