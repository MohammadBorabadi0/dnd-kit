import { useCallback, useState } from "react";
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import KanbanBoard from "@/components/KanbanBoard";

const Home = () => {
  return <KanbanBoard />;
};

export default Home;
