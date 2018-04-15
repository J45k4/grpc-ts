export interface EwSong {
	id: number;
	title: string;
	author: string;
	copyright: string;
	administrator: string;
	description: string;
	tags: string;
	text: string;
	variationId: number;
}
export interface VariationVersion {
	id: number;
	variationId: number;
	name: string;
	text: string;
	version: number;
	createdAt: number;
	disabledAt: number;
}
export interface FetchNewestVariationVersionByVariationIdRequest {
	variationIds: number[];
}
export interface FetchNewestVariationVersionByVariationIdResponse {
	variationVersions: string[];
}
export interface FetchVariationVersionByIdRequest {
	variationVersionIds: number[];
}
export interface FetchVariationVersionByIdResponse {
	variationVersions: string[];
}
export interface SongDatabase {
	id: number;
	name: string;
	version: number;
}
export interface SearchSongDatabasesRequest {
	offset: number;
	limit: number;
	searchWord: string;
	variationId: number;
}
export interface SearchSongDatabasesResponse {
	songDatabases: string[];
	maxSongDatabases: number;
}
export interface FetchSongDatabaseByIdRequest {
	songDatabaseIds: number[];
}
export interface FetchSongDatabaseByIdResponse {
	songDatabases: string[];
}
export interface CreateSongDatabaseRequest {
	name: string;
}
export interface CreateSongDatabaseResponse {
	songDatabase: string;
}
export interface UpdateSongDatabaseRequest {
	songDatabaseId: number;
	name: string;
	addTagIds: number[];
	removeTagIds: number[];
}
export interface UpdateSongDatabaseResponse {
	songDatabase: string;
	success: boolean;
}
export interface RemoveSongDatabaseRequest {
	songDatabaseId: number;
}
export interface RemoveSongDatabaseResponse {
	success: boolean;
}
export interface EwDatabase {
	id: number;
	name: string;
	songDatabaseId: number;
	filesystemPath: string;
	matiasClientId: number;
	removeSongsFromEwDatabase: number;
	removeSongsFromSongDatabase: number;
	variationVersionConflictAction: number;
	accepted: boolean;
}
export interface SearchEwDatabasesRequest {
	offset: number;
	limit: number;
	songDatabaseId: number;
	matiasClientId: number;
}
export interface SearchEwDatabasesResponse {
	ewDatabases: string[];
	maxEwDatabases: number;
}
export interface FetchEwDatabaseByIdRequest {
	ewDatabaseIds: number[];
}
export interface FetchEwDatabaseByIdResponse {
	ewDatabases: string[];
}
export interface CreateEwDatabaseRequest {
	songDatabaseId: number;
	name: string;
	filesystemPath: string;
	matiasClientId: number;
}
export interface CreateEwDatabaseResponse {
	ewDatabase: string;
}
export interface UpdateEwDatabaseRequest {
	ewDatabaseId: number;
	name: string;
	songDatabaseId: number;
	removeSongsFromEwDatabase: number;
	removeSongsFromSongDatabase: number;
	variationVersionConflictAction: number;
	accepted: boolean;
}
export interface UpdateEwDatabaseResponse {
	ewDatabase: string;
	success: boolean;
}
export interface RemoveEwDatabaseRequest {
	ewDatabaseId: number;
}
export interface RemoveEwDatabaseResponse {
	success: boolean;
}
export interface Language {
	id: number;
	name: string;
}
export interface SearchLanguagesRequest {
	offset: number;
	limit: number;
	searchWord: string;
}
export interface SearchLanguagesResponse {
	languages: string[];
	maxLanguages: number;
}
export interface FetchLanguageByIdRequest {
	languageIds: number[];
}
export interface FetchLanguageByIdResponse {
	languages: string[];
}
export interface CreateLanguageRequest {
	name: string;
}
export interface CreateLanguageResponse {
	language: string;
}
export interface UpdateLanguageRequest {
	languageId: number;
	name: string;
}
export interface UpdateLanguageResponse {
	language: string;
	success: boolean;
}
export interface RemoveLanguageRequest {
	languageId: number;
}
export interface RemoveLanguageResponse {
	success: boolean;
}
export interface Tag {
	id: number;
	name: string;
}
export interface SearchTagsRequest {
	songDatabaseId: number;
	variationId: number;
	offset: number;
	limit: number;
	searchWord: string;
}
export interface SearchTagsResponse {
	tags: string[];
	maxTags: number;
}
export interface FetchTagByIdRequest {
	tagIds: number[];
}
export interface FetchTagByIdResponse {
	tags: string[];
}
export interface CreateTagRequest {
	name: string;
}
export interface CreateTagResponse {
	tag: string;
}
export interface UpdateTagRequest {
	tagId: number;
	name: string;
}
export interface UpdateTagResponse {
	tag: string;
	Success: boolean;
}
export interface RemoveTagRequest {
	tagId: number;
}
export interface RemoveTagResponse {
	success: boolean;
}
export interface Log {
	id: number;
	logType: number;
	message: string;
	messageDate: number;
}
export interface SearchLogsRequest {
	offset: number;
	limit: number;
	messageType: number;
	startDate: number;
	endDate: number;
	searchWord: string;
}
export interface SearchLogsResponse {
	logs: string[];
	maxLogs: number;
}
export interface Variation {
	id: number;
	songId: number;
	languageId: number;
	authorId: number;
	copyrightId: number;
}
export interface SearchVariationsRequest {
	searchWord: string;
	songDatabaseId: number;
	songDatabaseFilterId: number;
	tagId: number;
	languageId: number;
	offset: number;
	limit: number;
	scheduleId: number;
	skipVariationIds: number[];
	orderBy: number;
	searchFrom: number;
}
export interface SearchVariationsResponse {
	variations: string[];
	maxVariations: number;
}
export interface FetchVariationByIdRequest {
	variationIds: number[];
}
export interface FetchVariationByIdResponse {
	variations: string[];
}
export interface CreateVariationRequest {
	name: string;
	text: string;
	tagIds: number[];
	songDatabaseIds: number[];
}
export interface CreateVariationResponse {
	variation: string;
}
export interface UpdateVariationRequest {
	variationId: number;
	name: string;
	text: string;
	songId: number;
	languageId: number;
	addTagIds: number[];
	removeTagIds: number[];
	addSongDatabaseIds: number[];
	removeSongDatabaseIds: number[];
}
export interface UpdateVariationResponse {
	variation: string;
	success: boolean;
}
export interface RemoveVariationRequest {
	variationId: number;
}
export interface RemoveVariationResponse {
	success: boolean;
}
export interface Schedule {
	id: number;
	name: string;
	start: number;
	end: number;
}
export interface SearchSchedulesRequest {
	offset: number;
	limit: number;
}
export interface SearchSchedulesResponse {
	schedules: string[];
	maxSchedules: number;
}
export interface FetchScheduleByIdRequest {
	scheduleIds: number[];
}
export interface FetchScheduleByIdResponse {
	schedules: string[];
}
export interface CreateScheduleRequest {
	name: string;
	start: number;
	end: number;
}
export interface CreateScheduleResponse {
	schedule: string;
}
export interface UpdateScheduleRequest {
	scheduleId: number;
	name: string;
	addSongIds: number[];
	removeSongIds: number[];
	changeOrderIds: number;
}
export interface UpdateScheduleResponse {
	schedule: string;
	success: boolean;
}
export interface RemoveScheduleRequest {
	scheduleId: number;
}
export interface RemoveScheduleResponse {
	success: boolean;
}
export interface Copyright {
	id: number;
	name: string;
}
export interface FetchCopyrightByIdRequest {
	copyrightIds: number[];
}
export interface FetchCopyrightByIdResponse {
	copyrights: string[];
}
export interface SearchCopyrightsRequest {
	offset: number;
	limit: number;
}
export interface SearchCopyrightsResponse {
	copyrights: string[];
}
export interface CreateCopyrightRequest {
	name: string;
}
export interface CreateCopyrightResponse {
	copyright: string;
}
export interface UpdateCopyrightRequest {
	copyrightId: number;
	name: string;
}
export interface UpdateCopyrightResponse {
	copyright: string;
	success: boolean;
}
export interface RemoveCopyrightRequest {
	copyrightId: number;
}
export interface RemoveCopyrightResponse {
	success: boolean;
}
export interface MatiasClient {
	id: number;
	name: string;
	hostName: string;
	key: string;
	accepted: boolean;
	connected: boolean;
}
export interface SearchMatiasClientsRequest {}
export interface SearchMatiasClientsResponse {
	matiasClients: string[];
	maxMatiasClients: number;
}
export interface FetchMatiasClientRequest {
	matiasClientIds: number[];
}
export interface FetchMatiasClientResponse {
	matiasClients: string[];
}
export interface FetchMatiasClientEwDatabasesRequest {
	matiasClientIds: number[];
}
export interface FetchMatiasClientEwDatabasesResponse {
	ewDatabases: string;
}
export enum MatiasClientAcceptedState {
	EMPTY = 0,
	ACEPTED = 1,
	DECLINED = 2
}export interface UpdateMatiasClientRequest {
	matiasClientId: number;
	state: string;
	name: string;
}
export interface UpdateMatiasClientResponse {
	success: boolean;
	matiasClient: string;
}
export interface Author {
	id: number;
	name: string;
}
export interface FetchAuthorByIdRequest {
	authorIds: number[];
}
export interface FetchAuthorByIdResponse {
	authors: string[];
}
export interface SearchAuthorsRequest {
	offset: number;
	limit: number;
}
export interface SearchAuthorsResponse {
	authors: string[];
}
export interface CreateAuthorRequest {
	name: string;
}
export interface CreateAuthorResponse {
	author: string;
}
export interface UpdateAuthorRequest {
	authorId: number;
	name: string;
}
export interface UpdateAuthorResponse {
	author: string;
	success: boolean;
}
export interface RemoveAuthorRequest {
	authorId: number;
}
export interface RemoveAuthorResponse {
	success: boolean;
}
