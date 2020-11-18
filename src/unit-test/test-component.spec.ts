import {Client} from '../app/models';
import {Match} from '../app/models/match';
import {Sanction} from '../app/models/sanction';
import {Team} from '../app/models/team';
import {Tournoi} from '../app/models';

describe('Test Client', () => {
  let client: Client = null;
  beforeEach(() => {
    client = new Client();
  });
  it('email shouldnt be null ', function() {
    expect(client.email).not.toBeNull();
  });
  it('password shouldnt be null', function() {
    expect(client.password).not.toBeNull();
  });
  it('role shouldnt be null', function() {
    expect(client.role).not.toBeNull();
  });
  it('Role is ADMIN', function() {
    client.role = 'ADMIN';
    expect(client.role).toEqual('ADMIN');
  });
  it('summonerName shouldnt be null', function() {
    expect(client.summonerName).not.toBeNull();
  });
});

describe('Test Match', () => {
  let match: Match = null;
  beforeEach(() => {
    match = new Match();
  });
  it('teamBlue shoudnt be null', function() {
    expect(match.teamBlue).not.toBeNull();
  });
  it('teamRed shoudnt be null', function() {
    expect(match.teamRed).not.toBeNull();
  });
});

describe('Test Sanction', () => {
  let sanction: Sanction = null;
  beforeEach(() => {
    sanction = new Sanction();
  });
  it('Sanction shoudnt be null', function() {
    expect(sanction.motif).not.toBeNull();
  });
  it('Motif shoudnt be null', function() {
    expect(sanction.duration).not.toBeNull();
  });
});
describe('Test Team', () => {
  let team: Team = null;
  beforeEach(() => {
    team = new Team();
  });
  it('Adc shoudnt be null', function() {
    expect(team.adc).not.toBeNull();
  });
  it('Jungle shoudnt be null', function() {
    expect(team.jungle).not.toBeNull();
  });
  it('Support shoudnt be null', function() {
    expect(team.support).not.toBeNull();
  });
  it('Mid shoudnt be null', function() {
    expect(team.mid).not.toBeNull();
  });
  it('Top shoudnt be null', function() {
    expect(team.top).not.toBeNull();
  });
  it('Name shoudnt be null', function() {
    expect(team.name).not.toBeNull();
  });
  it('Score shoudnt be null', function() {
    expect(team.score).not.toBeNull();
  });
  it('Status shoudnt be null', function() {
    expect(team.status).not.toBeNull();
  });

});
describe('Test Tournoi', () => {
  let tournoi: Tournoi = null;
  beforeEach(() => {
    tournoi = new Tournoi();
  });
  it('Format shoudnt be null', function() {
    expect(tournoi.format).not.toBeNull();
  });
  it('Name shoudnt be null', function() {
    expect(tournoi.name).not.toBeNull();
  });
  it('Slots shoudnt be null', function() {
    expect(tournoi.slots).not.toBeNull();
  });
});

