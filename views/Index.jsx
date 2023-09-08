const React = require("react");

function Index({ logs }) {
  return (
    <>
      <h1>Index View</h1>
      {logs.map((log) => {
        return (
          <>
            <h3>title : {log.title}</h3>
            <h3>entry : {log.entry}</h3>
            <h3>shipIsBroken : {log.shipIsBroken.toString()}</h3>
            <h3>date : {log.createdAt.toString()}</h3>
          </>
        );
      })}
    </>
  );
}

module.exports = Index;
