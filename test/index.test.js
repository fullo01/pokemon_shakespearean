// const request = require('supertest');
var chai = require('chai');
chai.use(require('chai-http'));
const app = require('../index');

describe("GET /pokemon/:pokemonName", () => {

    it("should get a pokemon when requested", (done) => {
      const pokemonName = 'pikachu';
      chai.request(app)
        .get(`/pokemon/${pokemonName}`)
        .end(function(err, res){
          chai.expect(res).to.have.status(200);
          chai.expect(res.body).to.have.property('name', 'pikachu');
          chai.expect(res.body).to.have.property('description');
          if (err) throw err;
          done();
        });
     });

    it("should error when a non-existent pokemon name is provided", (done) => {
      const pokemonName = 'whale';
      chai.request(app)
        .get(`/pokemon/${pokemonName}`)
        .end(function(err, res){
          chai.expect(res.statusCode).to.equal(404);
          if (err) throw err;
          done();
        });
    });
    
});

