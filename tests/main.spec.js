import { expect } from "chai";
import {
  search,
  searchAlbuns,
  searchPlaylists,
  searchTracks,
  searchArtists
} from "./../src/main";

describe("Spotify Wrapper", () => {
  describe("smoke tests", () => {
    it("shold exist the search method", () => {
      expect(search).to.exist;
    });
    it("shold exist the searchAlbuns method", () => {
      expect(searchAlbuns).to.exist;
    });
    it("shold exist the searchArtists method", () => {
      expect(searchArtists).to.exist;
    });
    it("shold exist the searchTracks method", () => {
      expect(searchTracks).to.exist;
    });
    it("shold exist the searchPlaylists method", () => {
      expect(searchPlaylists).to.exist;
    });
  });
});
