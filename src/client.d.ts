import * as types from "./types";
export class Seppo {
		constructor(args: {
		ip: string,
		port: number
	});
		fetchVariationById(args: types.FetchVariationByIdRequest): Promise<types.FetchVariationByIdResponse>;
searchVariations(args: types.SearchVariationsRequest): Promise<types.SearchVariationsResponse>;
fetchNewestVariationVersionByVariationId(args: types.FetchNewestVariationVersionByVariationIdRequest): Promise<types.FetchNewestVariationVersionByVariationIdResponse>;
fetchVariationVersionById(args: types.FetchVariationVersionByIdRequest): Promise<types.FetchVariationVersionByIdResponse>;
searchSongDatabases(args: types.SearchSongDatabasesRequest): Promise<types.SearchSongDatabasesResponse>;
fetchSongDatabaseById(args: types.FetchSongDatabaseByIdRequest): Promise<types.FetchSongDatabaseByIdResponse>;
searchEwDatabases(args: types.SearchEwDatabasesRequest): Promise<types.SearchEwDatabasesResponse>;
fetchEwDatabaseById(args: types.FetchEwDatabaseByIdRequest): Promise<types.FetchEwDatabaseByIdResponse>;
searchTags(args: types.SearchTagsRequest): Promise<types.SearchTagsResponse>;
fetchTagById(args: types.FetchTagByIdRequest): Promise<types.FetchTagByIdResponse>;
searchLanguages(args: types.SearchLanguagesRequest): Promise<types.SearchLanguagesResponse>;
fetchLanguageById(args: types.FetchLanguageByIdRequest): Promise<types.FetchLanguageByIdResponse>;
searchSchedules(args: types.SearchSchedulesRequest): Promise<types.SearchSchedulesResponse>;
fetchScheduleById(args: types.FetchScheduleByIdRequest): Promise<types.FetchScheduleByIdResponse>;
searchAuthors(args: types.SearchAuthorsRequest): Promise<types.SearchAuthorsResponse>;
fetchAuthorById(args: types.FetchAuthorByIdRequest): Promise<types.FetchAuthorByIdResponse>;
searchCopyrights(args: types.SearchCopyrightsRequest): Promise<types.SearchCopyrightsResponse>;
fetchCopyrightById(args: types.FetchCopyrightByIdRequest): Promise<types.FetchCopyrightByIdResponse>;
searchMatiasClients(args: types.SearchMatiasClientsRequest): Promise<types.SearchMatiasClientsResponse>;
fetchMatiasClient(args: types.FetchMatiasClientRequest): Promise<types.FetchMatiasClientResponse>;
fetchMatiasClientEwDatabases(args: types.FetchMatiasClientEwDatabasesRequest): Promise<types.FetchMatiasClientEwDatabasesResponse>;
searchLogs(args: types.SearchLogsRequest): Promise<types.SearchLogsResponse>;
createVariation(args: types.CreateVariationRequest): Promise<types.CreateVariationResponse>;
updateVariation(args: types.UpdateVariationRequest): Promise<types.UpdateVariationResponse>;
removeVariation(args: types.RemoveVariationRequest): Promise<types.RemoveVariationResponse>;
createSongDatabase(args: types.CreateSongDatabaseRequest): Promise<types.CreateSongDatabaseResponse>;
updateSongDatabase(args: types.UpdateSongDatabaseRequest): Promise<types.UpdateSongDatabaseResponse>;
removeSongDatabase(args: types.RemoveSongDatabaseRequest): Promise<types.RemoveSongDatabaseResponse>;
createEwDatabase(args: types.CreateEwDatabaseRequest): Promise<types.CreateEwDatabaseResponse>;
updateEwDatabase(args: types.UpdateEwDatabaseRequest): Promise<types.UpdateEwDatabaseResponse>;
removeEwDatabase(args: types.RemoveEwDatabaseRequest): Promise<types.RemoveEwDatabaseResponse>;
createTag(args: types.CreateTagRequest): Promise<types.CreateTagResponse>;
updateTag(args: types.UpdateTagRequest): Promise<types.UpdateTagResponse>;
removeTag(args: types.RemoveTagRequest): Promise<types.RemoveTagResponse>;
createLanguage(args: types.CreateLanguageRequest): Promise<types.CreateLanguageResponse>;
updateLanguage(args: types.UpdateLanguageRequest): Promise<types.UpdateLanguageResponse>;
removeLanguage(args: types.RemoveLanguageRequest): Promise<types.RemoveLanguageResponse>;
createSchedule(args: types.CreateScheduleRequest): Promise<types.CreateScheduleResponse>;
updateSchedule(args: types.UpdateScheduleRequest): Promise<types.UpdateScheduleResponse>;
removeSchedule(args: types.RemoveScheduleRequest): Promise<types.RemoveScheduleResponse>;
createAuthor(args: types.CreateAuthorRequest): Promise<types.CreateAuthorResponse>;
updateAuthor(args: types.UpdateAuthorRequest): Promise<types.UpdateAuthorResponse>;
removeAuthor(args: types.RemoveAuthorRequest): Promise<types.RemoveAuthorResponse>;
createCopyright(args: types.CreateCopyrightRequest): Promise<types.CreateCopyrightResponse>;
updateCopyright(args: types.UpdateCopyrightRequest): Promise<types.UpdateCopyrightResponse>;
removeCopyright(args: types.RemoveCopyrightRequest): Promise<types.RemoveCopyrightResponse>;
updateMatiasClient(args: types.UpdateMatiasClientRequest): Promise<types.UpdateMatiasClientResponse>; 
	}