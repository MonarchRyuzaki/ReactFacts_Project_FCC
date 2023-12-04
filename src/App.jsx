import "./App.css";
import Main from "./Main";

function App() {
  return (
    <div className="w-full overflow-hidden">
      <div className="flex justify-center items-center px-6 sm:px-16 bg-darkBlack">
        <div className="flex justify-between items-center w-full xl:max-w-[1280px] py-4">
          <h1 className="text-darkBlue text-3xl">ReactFacts</h1>
          <p className="text-white text-lg">ReactCourse - Project 1</p>
        </div>
      </div>
      <div className="flex justify-center items-start px-6 sm:px-16 bg-gray">
        <div className="w-full xl:max-w-[1280px]">
          <Main />
        </div>
      </div>
    </div>
  );
}

export default App;
