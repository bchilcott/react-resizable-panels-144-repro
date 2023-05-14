"use client";

import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";

export default function ResizablePanels() {
  return (
    <PanelGroup direction="horizontal" storage={localStorage}>
      <Panel defaultSize={70}>
        <div>Panel 1</div>
      </Panel>
      <PanelResizeHandle className="w-2 bg-blue-800" />
      <Panel>
        <div>Panel 2</div>
      </Panel>
    </PanelGroup>
  );
}
