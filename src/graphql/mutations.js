/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createVodAsset = `mutation CreateVodAsset(
  $input: CreateVodAssetInput!
  $condition: ModelvodAssetConditionInput
) {
  createVodAsset(input: $input, condition: $condition) {
    id
    title
    description
    video {
      id
    }
  }
}
`;
export const updateVodAsset = `mutation UpdateVodAsset(
  $input: UpdateVodAssetInput!
  $condition: ModelvodAssetConditionInput
) {
  updateVodAsset(input: $input, condition: $condition) {
    id
    title
    description
    video {
      id
    }
  }
}
`;
export const deleteVodAsset = `mutation DeleteVodAsset(
  $input: DeleteVodAssetInput!
  $condition: ModelvodAssetConditionInput
) {
  deleteVodAsset(input: $input, condition: $condition) {
    id
    title
    description
    video {
      id
    }
  }
}
`;
export const createVideoObject = `mutation CreateVideoObject(
  $input: CreateVideoObjectInput!
  $condition: ModelvideoObjectConditionInput
) {
  createVideoObject(input: $input, condition: $condition) {
    id
  }
}
`;
export const updateVideoObject = `mutation UpdateVideoObject(
  $input: UpdateVideoObjectInput!
  $condition: ModelvideoObjectConditionInput
) {
  updateVideoObject(input: $input, condition: $condition) {
    id
  }
}
`;
export const deleteVideoObject = `mutation DeleteVideoObject(
  $input: DeleteVideoObjectInput!
  $condition: ModelvideoObjectConditionInput
) {
  deleteVideoObject(input: $input, condition: $condition) {
    id
  }
}
`;
