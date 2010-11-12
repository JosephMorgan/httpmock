var http = require('http'),
    url = require('url'),
    sys = require('sys'),
    repository = require('./lib/repository');

http.createServer(function(request, response) {
    response.writeHead(200, {'Content-type': 'application/json'});
    var body = {
        servers: [],
        link: {
            href: "http://localhost:3000/servers",
            rel: "http://localhost:3000/relations/create"
        }
    };

    response.end(sys.inspect(body));
}).listen(3000);

console.log('HTTPMock running at http://localhost:3000');

/*
Admin port only:
GET /
  Shows all stubbed ports, with:
    hyperlink to delete
        stops process
        deletes data store
    hyperlink to get hits
        reads data store
        cannot send request, because that would steal a url
    hyperlink to set stub
        writes data store
    hyperlink to delete stub
    hyperlink to proxy?
  Hyperlink to setup port
    forks on different port, record-mode
  Relations
    HTML description of relationships, describing inputs and outputs

Data store is file-based
    /{port-number}
        /requests
            SHA-1   {records entire HTTP request, including headers}
            SHA-1
            ...
        /stubs
            SHA-1?

Example C# code:
// calls GET /
// setup has optional second parameter (share), which, if false, follows the 
//   hyperlink to delete that URL if its there
// if the URL is not there, follows hyperlink to create
using (var remote = HttpMockServer.at("http://localhost:3000").setup("http://localhost:3001"))
{
    // calls GET/
    // follows hyperlink to create stub
    remote.stub("/endpoint?query").returns(body);

    // Could be done locally at first, but would be nice to handle centrally
    remote.proxy("/endpoint2").to("http://host/endpoint2");

    test();

    // Calls GET /
    // follows hyperlink to get hits
    // Matching could be done locally at first, with an eye on centralizing later
    Assert.That(remote.WasCalledAt("/anotherEndpoint").WithHeader("Content-Type", "text/*")
        .WithBodyContaining("text");
}
*/

