export declare class Seppo {
	constructor(args: ClientOptions);
	fetchVariationById(args: FetchVariationByIdRequest): FetchVariationByIdResponse;
	searchVariations(args: SearchVariationsRequest): SearchVariationsResponse;
	fetchNewestVariationVersionByVariationId(args: FetchNewestVariationVersionByVariationIdRequest): FetchNewestVariationVersionByVariationIdResponse;
	fetchVariationVersionById(args: FetchVariationVersionByIdRequest): FetchVariationVersionByIdResponse;
	searchSongDatabases(args: SearchSongDatabasesRequest): SearchSongDatabasesResponse;
	fetchSongDatabaseById(args: FetchSongDatabaseByIdRequest): FetchSongDatabaseByIdResponse;
	searchEwDatabases(args: SearchEwDatabasesRequest): SearchEwDatabasesResponse;
	fetchEwDatabaseById(args: FetchEwDatabaseByIdRequest): FetchEwDatabaseByIdResponse;
	searchTags(args: SearchTagsRequest): SearchTagsResponse;
	fetchTagById(args: FetchTagByIdRequest): FetchTagByIdResponse;
	searchLanguages(args: SearchLanguagesRequest): SearchLanguagesResponse;
	fetchLanguageById(args: FetchLanguageByIdRequest): FetchLanguageByIdResponse;
	searchSchedules(args: SearchSchedulesRequest): SearchSchedulesResponse;
	fetchScheduleById(args: FetchScheduleByIdRequest): FetchScheduleByIdResponse;
	searchAuthors(args: SearchAuthorsRequest): SearchAuthorsResponse;
	fetchAuthorById(args: FetchAuthorByIdRequest): FetchAuthorByIdResponse;
	searchCopyrights(args: SearchCopyrightsRequest): SearchCopyrightsResponse;
	fetchCopyrightById(args: FetchCopyrightByIdRequest): FetchCopyrightByIdResponse;
	searchMatiasClients(args: SearchMatiasClientsRequest): SearchMatiasClientsResponse;
	fetchMatiasClient(args: FetchMatiasClientRequest): FetchMatiasClientResponse;
	fetchMatiasClientEwDatabases(args: FetchMatiasClientEwDatabasesRequest): FetchMatiasClientEwDatabasesResponse;
	searchLogs(args: SearchLogsRequest): SearchLogsResponse;
	createVariation(args: CreateVariationRequest): CreateVariationResponse;
	updateVariation(args: UpdateVariationRequest): UpdateVariationResponse;
	removeVariation(args: RemoveVariationRequest): RemoveVariationResponse;
	createSongDatabase(args: CreateSongDatabaseRequest): CreateSongDatabaseResponse;
	updateSongDatabase(args: UpdateSongDatabaseRequest): UpdateSongDatabaseResponse;
	removeSongDatabase(args: RemoveSongDatabaseRequest): RemoveSongDatabaseResponse;
	createEwDatabase(args: CreateEwDatabaseRequest): CreateEwDatabaseResponse;
	updateEwDatabase(args: UpdateEwDatabaseRequest): UpdateEwDatabaseResponse;
	removeEwDatabase(args: RemoveEwDatabaseRequest): RemoveEwDatabaseResponse;
	createTag(args: CreateTagRequest): CreateTagResponse;
	updateTag(args: UpdateTagRequest): UpdateTagResponse;
	removeTag(args: RemoveTagRequest): RemoveTagResponse;
	createLanguage(args: CreateLanguageRequest): CreateLanguageResponse;
	updateLanguage(args: UpdateLanguageRequest): UpdateLanguageResponse;
	removeLanguage(args: RemoveLanguageRequest): RemoveLanguageResponse;
	createSchedule(args: CreateScheduleRequest): CreateScheduleResponse;
	updateSchedule(args: UpdateScheduleRequest): UpdateScheduleResponse;
	removeSchedule(args: RemoveScheduleRequest): RemoveScheduleResponse;
	createAuthor(args: CreateAuthorRequest): CreateAuthorResponse;
	updateAuthor(args: UpdateAuthorRequest): UpdateAuthorResponse;
	removeAuthor(args: RemoveAuthorRequest): RemoveAuthorResponse;
	createCopyright(args: CreateCopyrightRequest): CreateCopyrightResponse;
	updateCopyright(args: UpdateCopyrightRequest): UpdateCopyrightResponse;
	removeCopyright(args: RemoveCopyrightRequest): RemoveCopyrightResponse;
	updateMatiasClient(args: UpdateMatiasClientRequest): UpdateMatiasClientResponse;
}

export interface ClientOptions {
	ip: string;
	port: number;
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
	ewDatabases: EwDatabase[];
	maxEwDatabases: number;
}

export interface FetchEwDatabaseByIdRequest {
	ewDatabaseIds: number[];
}

export interface FetchEwDatabaseByIdResponse {
	ewDatabases: EwDatabase[];
}

export interface CreateEwDatabaseRequest {
	songDatabaseId: number;
	name: string;
	filesystemPath: string;
	matiasClientId: number;
}

export interface CreateEwDatabaseResponse {
	ewDatabase: EwDatabase;
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
	ewDatabase: EwDatabase;
	success: boolean;
}

export interface RemoveEwDatabaseRequest {
	ewDatabaseId: number;
}

export interface RemoveEwDatabaseResponse {
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
	tags: Tag[];
	maxTags: number;
}

export interface FetchTagByIdRequest {
	tagIds: number[];
}

export interface FetchTagByIdResponse {
	tags: Tag[];
}

export interface CreateTagRequest {
	name: string;
}

export interface CreateTagResponse {
	tag: Tag;
}

export interface UpdateTagRequest {
	tagId: number;
	name: string;
}

export interface UpdateTagResponse {
	tag: Tag;
	Success: boolean;
}

export interface RemoveTagRequest {
	tagId: number;
}

export interface RemoveTagResponse {
	success: boolean;
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
	songDatabases: SongDatabase[];
	maxSongDatabases: number;
}

export interface FetchSongDatabaseByIdRequest {
	songDatabaseIds: number[];
}

export interface FetchSongDatabaseByIdResponse {
	songDatabases: SongDatabase[];
}

export interface CreateSongDatabaseRequest {
	name: string;
}

export interface CreateSongDatabaseResponse {
	songDatabase: SongDatabase;
}

export interface UpdateSongDatabaseRequest {
	songDatabaseId: number;
	name: string;
	addTagIds: number[];
	removeTagIds: number[];
}

export interface UpdateSongDatabaseResponse {
	songDatabase: SongDatabase;
	success: boolean;
}

export interface RemoveSongDatabaseRequest {
	songDatabaseId: number;
}

export interface RemoveSongDatabaseResponse {
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
	languages: Language[];
	maxLanguages: number;
}

export interface FetchLanguageByIdRequest {
	languageIds: number[];
}

export interface FetchLanguageByIdResponse {
	languages: Language[];
}

export interface CreateLanguageRequest {
	name: string;
}

export interface CreateLanguageResponse {
	language: Language;
}

export interface UpdateLanguageRequest {
	languageId: number;
	name: string;
}

export interface UpdateLanguageResponse {
	language: Language;
	success: boolean;
}

export interface RemoveLanguageRequest {
	languageId: number;
}

export interface RemoveLanguageResponse {
	success: boolean;
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
	variationVersions: VariationVersion[];
}

export interface FetchVariationVersionByIdRequest {
	variationVersionIds: number[];
}

export interface FetchVariationVersionByIdResponse {
	variationVersions: VariationVersion[];
}

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
	schedules: Schedule[];
	maxSchedules: number;
}

export interface FetchScheduleByIdRequest {
	scheduleIds: number[];
}

export interface FetchScheduleByIdResponse {
	schedules: Schedule[];
}

export interface CreateScheduleRequest {
	name: string;
	start: number;
	end: number;
}

export interface CreateScheduleResponse {
	schedule: Schedule;
}

export interface UpdateScheduleRequest {
	scheduleId: number;
	name: string;
	addSongIds: number[];
	removeSongIds: number[];
	changeOrderIds: number;
}

export interface UpdateScheduleResponse {
	schedule: Schedule;
	success: boolean;
}

export interface RemoveScheduleRequest {
	scheduleId: number;
}

export interface RemoveScheduleResponse {
	success: boolean;
}

export interface Author {
	id: number;
	name: string;
}

export interface FetchAuthorByIdRequest {
	authorIds: number[];
}

export interface FetchAuthorByIdResponse {
	authors: Author[];
}

export interface SearchAuthorsRequest {
	offset: number;
	limit: number;
}

export interface SearchAuthorsResponse {
	authors: Author[];
}

export interface CreateAuthorRequest {
	name: string;
}

export interface CreateAuthorResponse {
	author: Author;
}

export interface UpdateAuthorRequest {
	authorId: number;
	name: string;
}

export interface UpdateAuthorResponse {
	author: Author;
	success: boolean;
}

export interface RemoveAuthorRequest {
	authorId: number;
}

export interface RemoveAuthorResponse {
	success: boolean;
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
	variations: Variation[];
	maxVariations: number;
}

export interface FetchVariationByIdRequest {
	variationIds: number[];
}

export interface FetchVariationByIdResponse {
	variations: Variation[];
}

export interface CreateVariationRequest {
	name: string;
	text: string;
	tagIds: number[];
	songDatabaseIds: number[];
}

export interface CreateVariationResponse {
	variation: Variation;
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
	variation: Variation;
	success: boolean;
}

export interface RemoveVariationRequest {
	variationId: number;
}

export interface RemoveVariationResponse {
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
	logs: Log[];
	maxLogs: number;
}

export interface Copyright {
	id: number;
	name: string;
}

export interface FetchCopyrightByIdRequest {
	copyrightIds: number[];
}

export interface FetchCopyrightByIdResponse {
	copyrights: Copyright[];
}

export interface SearchCopyrightsRequest {
	offset: number;
	limit: number;
}

export interface SearchCopyrightsResponse {
	copyrights: Copyright[];
}

export interface CreateCopyrightRequest {
	name: string;
}

export interface CreateCopyrightResponse {
	copyright: Copyright;
}

export interface UpdateCopyrightRequest {
	copyrightId: number;
	name: string;
}

export interface UpdateCopyrightResponse {
	copyright: Copyright;
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

export interface SearchMatiasClientsRequest {
	
}

export interface SearchMatiasClientsResponse {
	matiasClients: MatiasClient[];
	maxMatiasClients: number;
}

export interface FetchMatiasClientRequest {
	matiasClientIds: number[];
}

export interface FetchMatiasClientResponse {
	matiasClients: MatiasClient[];
}

export interface FetchMatiasClientEwDatabasesRequest {
	matiasClientIds: number[];
}

export interface FetchMatiasClientEwDatabasesResponseEwDatabases {
	ewDatabases: EwDatabase[];
}

export interface FetchMatiasClientEwDatabasesResponse {
	ewDatabases: FetchMatiasClientEwDatabasesResponseEwDatabases;
}

export enum MatiasClientAcceptedState {
	EMPTY = 0,
	ACEPTED = 1,
	DECLINED = 2
}

export interface UpdateMatiasClientRequest {
	matiasClientId: number;
	state: MatiasClientAcceptedState;
	name: string;
}

export interface UpdateMatiasClientResponse {
	success: boolean;
	matiasClient: MatiasClient;
}