import React from 'react';

function Demo() {
  return (
    <div
      id="demo"
      className="h-[42rem] w-screen flex flex-col items-center justify-center"
    >
      <h1
        id="demoText"
        className="text-3xl text-honeydew font-bold mt-6 mb-10 tracking-wider border-b-4"
      >
        DEMO
      </h1>
      <iframe
        width="750"
        height="422"
        src="https://www.youtube.com/embed/8zvLTEEqlmg"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  );
}

export default Demo;
