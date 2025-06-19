// src/services/SpaceTravelApi.js
import SpaceTravelMockApi from "./SpaceTravelMockApi";

export const getPlanets = async () => {
  return await SpaceTravelMockApi.getPlanets(); // ✅ correct
};

export const getSpacecrafts = async () => {
  return await SpaceTravelMockApi.getSpacecrafts();
};

export const getSpacecraftById = async (id) => {
  return await SpaceTravelMockApi.getSpacecraftById({ id });
};

export const buildSpacecraft = async (data) => {
  return await SpaceTravelMockApi.buildSpacecraft(data);
};

export const destroySpacecraftById = async (id) => {
  return await SpaceTravelMockApi.destroySpacecraftById({ id });
};

export const sendSpacecraftToPlanet = async (spacecraftId, targetPlanetId) => {
  return await SpaceTravelMockApi.sendSpacecraftToPlanet({
    spacecraftId,
    targetPlanetId,
  });
};
