import { createRoot } from "react-dom/client";
import { Analytics } from "@vercel/analytics/react";
import App from "./App.tsx";
import "./index.css";

// Patch to prevent "removeChild" errors caused by browser extensions manipulating the DOM
const originalRemoveChild = Node.prototype.removeChild;
Node.prototype.removeChild = function <T extends Node>(child: T): T {
  if (child.parentNode !== this) {
    console.warn("Cannot remove a child from a different parent", child, this);
    return child;
  }
  return originalRemoveChild.call(this, child) as T;
};

const originalInsertBefore = Node.prototype.insertBefore;
Node.prototype.insertBefore = function <T extends Node>(
  newNode: T,
  referenceNode: Node | null
): T {
  if (referenceNode && referenceNode.parentNode !== this) {
    console.warn("Cannot insert before a reference node from a different parent", referenceNode, this);
    return newNode;
  }
  return originalInsertBefore.call(this, newNode, referenceNode) as T;
};

createRoot(document.getElementById("root")!).render(
  <>
    <App />
    <Analytics />
  </>
);
