exports.resolveResponseSongDatabase = input => {
	const res = {};
	res.id = input.getId();
	res.name = input.getName();
	res.version = input.getVersion();
	return res;
};
export interface SongDatabase {
	id: number;
	name: string;
	version: number;
}
exports.resolveResponseSearchSongDatabasesRequest = input => {
	const res = {};
	res.offset = input.getOffset();
	res.limit = input.getLimit();
	res.searchWord = input.getSearchword();
	res.variationId = input.getVariationid();
	return res;
};
export interface SearchSongDatabasesRequest {
	offset: number;
	limit: number;
	searchWord: string;
	variationId: number;
}
exports.resolveResponseSearchSongDatabasesResponse = input => {
	const res = {};
	if (input.getSongdatabases()) {
		res.songDatabases = input
			.getSongdatabases()
			.map(p => resolvers.resolveResponseTypeSongDatabase);
	}
	res.maxSongDatabases = input.getMaxsongdatabases();
	return res;
};
export interface SearchSongDatabasesResponse {
	songDatabases: string[];
	maxSongDatabases: number;
}
exports.resolveResponseFetchSongDatabaseByIdRequest = input => {
	const res = {};
	res.songDatabaseIds = input.getSongdatabaseidsList();
	return res;
};
export interface FetchSongDatabaseByIdRequest {
	songDatabaseIds: number[];
}
exports.resolveResponseFetchSongDatabaseByIdResponse = input => {
	const res = {};
	if (input.getSongdatabases()) {
		res.songDatabases = input
			.getSongdatabases()
			.map(p => resolvers.resolveResponseTypeSongDatabase);
	}
	return res;
};
export interface FetchSongDatabaseByIdResponse {
	songDatabases: string[];
}
exports.resolveResponseCreateSongDatabaseRequest = input => {
	const res = {};
	res.name = input.getName();
	return res;
};
export interface CreateSongDatabaseRequest {
	name: string;
}
exports.resolveResponseCreateSongDatabaseResponse = input => {
	const res = {};
	if (input.getSongdatabase()) {
		res.songDatabase = input.getSongdatabase();
	}
	return res;
};
export interface CreateSongDatabaseResponse {
	songDatabase: string;
}
exports.resolveResponseUpdateSongDatabaseRequest = input => {
	const res = {};
	res.songDatabaseId = input.getSongdatabaseid();
	res.name = input.getName();
	res.addTagIds = input.getAddtagidsList();
	res.removeTagIds = input.getRemovetagidsList();
	return res;
};
export interface UpdateSongDatabaseRequest {
	songDatabaseId: number;
	name: string;
	addTagIds: number[];
	removeTagIds: number[];
}
exports.resolveResponseUpdateSongDatabaseResponse = input => {
	const res = {};
	if (input.getSongdatabase()) {
		res.songDatabase = input.getSongdatabase();
	}
	res.success = input.getSuccess();
	return res;
};
export interface UpdateSongDatabaseResponse {
	songDatabase: string;
	success: boolean;
}
exports.resolveResponseRemoveSongDatabaseRequest = input => {
	const res = {};
	res.songDatabaseId = input.getSongdatabaseid();
	return res;
};
export interface RemoveSongDatabaseRequest {
	songDatabaseId: number;
}
exports.resolveResponseRemoveSongDatabaseResponse = input => {
	const res = {};
	res.success = input.getSuccess();
	return res;
};
export interface RemoveSongDatabaseResponse {
	success: boolean;
}
exports.resolveResponseEwDatabase = input => {
	const res = {};
	res.id = input.getId();
	res.name = input.getName();
	res.songDatabaseId = input.getSongdatabaseid();
	res.filesystemPath = input.getFilesystempath();
	res.matiasClientId = input.getMatiasclientid();
	res.removeSongsFromEwDatabase = input.getRemovesongsfromewdatabase();
	res.removeSongsFromSongDatabase = input.getRemovesongsfromsongdatabase();
	res.variationVersionConflictAction = input.getVariationversionconflictaction();
	res.accepted = input.getAccepted();
	return res;
};
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
exports.resolveResponseSearchEwDatabasesRequest = input => {
	const res = {};
	res.offset = input.getOffset();
	res.limit = input.getLimit();
	res.songDatabaseId = input.getSongdatabaseid();
	res.matiasClientId = input.getMatiasclientid();
	return res;
};
export interface SearchEwDatabasesRequest {
	offset: number;
	limit: number;
	songDatabaseId: number;
	matiasClientId: number;
}
exports.resolveResponseSearchEwDatabasesResponse = input => {
	const res = {};
	if (input.getEwdatabases()) {
		res.ewDatabases = input
			.getEwdatabases()
			.map(p => resolvers.resolveResponseTypeEwDatabase);
	}
	res.maxEwDatabases = input.getMaxewdatabases();
	return res;
};
export interface SearchEwDatabasesResponse {
	ewDatabases: string[];
	maxEwDatabases: number;
}
exports.resolveResponseFetchEwDatabaseByIdRequest = input => {
	const res = {};
	res.ewDatabaseIds = input.getEwdatabaseidsList();
	return res;
};
export interface FetchEwDatabaseByIdRequest {
	ewDatabaseIds: number[];
}
exports.resolveResponseFetchEwDatabaseByIdResponse = input => {
	const res = {};
	if (input.getEwdatabases()) {
		res.ewDatabases = input
			.getEwdatabases()
			.map(p => resolvers.resolveResponseTypeEwDatabase);
	}
	return res;
};
export interface FetchEwDatabaseByIdResponse {
	ewDatabases: string[];
}
exports.resolveResponseCreateEwDatabaseRequest = input => {
	const res = {};
	res.songDatabaseId = input.getSongdatabaseid();
	res.name = input.getName();
	res.filesystemPath = input.getFilesystempath();
	res.matiasClientId = input.getMatiasclientid();
	return res;
};
export interface CreateEwDatabaseRequest {
	songDatabaseId: number;
	name: string;
	filesystemPath: string;
	matiasClientId: number;
}
exports.resolveResponseCreateEwDatabaseResponse = input => {
	const res = {};
	if (input.getEwdatabase()) {
		res.ewDatabase = input.getEwdatabase();
	}
	return res;
};
export interface CreateEwDatabaseResponse {
	ewDatabase: string;
}
exports.resolveResponseUpdateEwDatabaseRequest = input => {
	const res = {};
	res.ewDatabaseId = input.getEwdatabaseid();
	res.name = input.getName();
	res.songDatabaseId = input.getSongdatabaseid();
	res.removeSongsFromEwDatabase = input.getRemovesongsfromewdatabase();
	res.removeSongsFromSongDatabase = input.getRemovesongsfromsongdatabase();
	res.variationVersionConflictAction = input.getVariationversionconflictaction();
	res.accepted = input.getAccepted();
	return res;
};
export interface UpdateEwDatabaseRequest {
	ewDatabaseId: number;
	name: string;
	songDatabaseId: number;
	removeSongsFromEwDatabase: number;
	removeSongsFromSongDatabase: number;
	variationVersionConflictAction: number;
	accepted: boolean;
}
exports.resolveResponseUpdateEwDatabaseResponse = input => {
	const res = {};
	if (input.getEwdatabase()) {
		res.ewDatabase = input.getEwdatabase();
	}
	res.success = input.getSuccess();
	return res;
};
export interface UpdateEwDatabaseResponse {
	ewDatabase: string;
	success: boolean;
}
exports.resolveResponseRemoveEwDatabaseRequest = input => {
	const res = {};
	res.ewDatabaseId = input.getEwdatabaseid();
	return res;
};
export interface RemoveEwDatabaseRequest {
	ewDatabaseId: number;
}
exports.resolveResponseRemoveEwDatabaseResponse = input => {
	const res = {};
	res.success = input.getSuccess();
	return res;
};
export interface RemoveEwDatabaseResponse {
	success: boolean;
}
exports.resolveResponseTag = input => {
	const res = {};
	res.id = input.getId();
	res.name = input.getName();
	return res;
};
export interface Tag {
	id: number;
	name: string;
}
exports.resolveResponseSearchTagsRequest = input => {
	const res = {};
	res.songDatabaseId = input.getSongdatabaseid();
	res.variationId = input.getVariationid();
	res.offset = input.getOffset();
	res.limit = input.getLimit();
	res.searchWord = input.getSearchword();
	return res;
};
export interface SearchTagsRequest {
	songDatabaseId: number;
	variationId: number;
	offset: number;
	limit: number;
	searchWord: string;
}
exports.resolveResponseSearchTagsResponse = input => {
	const res = {};
	if (input.getTags()) {
		res.tags = input.getTags().map(p => resolvers.resolveResponseTypeTag);
	}
	res.maxTags = input.getMaxtags();
	return res;
};
export interface SearchTagsResponse {
	tags: string[];
	maxTags: number;
}
exports.resolveResponseFetchTagByIdRequest = input => {
	const res = {};
	res.tagIds = input.getTagidsList();
	return res;
};
export interface FetchTagByIdRequest {
	tagIds: number[];
}
exports.resolveResponseFetchTagByIdResponse = input => {
	const res = {};
	if (input.getTags()) {
		res.tags = input.getTags().map(p => resolvers.resolveResponseTypeTag);
	}
	return res;
};
export interface FetchTagByIdResponse {
	tags: string[];
}
exports.resolveResponseCreateTagRequest = input => {
	const res = {};
	res.name = input.getName();
	return res;
};
export interface CreateTagRequest {
	name: string;
}
exports.resolveResponseCreateTagResponse = input => {
	const res = {};
	if (input.getTag()) {
		res.tag = input.getTag();
	}
	return res;
};
export interface CreateTagResponse {
	tag: string;
}
exports.resolveResponseUpdateTagRequest = input => {
	const res = {};
	res.tagId = input.getTagid();
	res.name = input.getName();
	return res;
};
export interface UpdateTagRequest {
	tagId: number;
	name: string;
}
exports.resolveResponseUpdateTagResponse = input => {
	const res = {};
	if (input.getTag()) {
		res.tag = input.getTag();
	}
	res.Success = input.getSuccess();
	return res;
};
export interface UpdateTagResponse {
	tag: string;
	Success: boolean;
}
exports.resolveResponseRemoveTagRequest = input => {
	const res = {};
	res.tagId = input.getTagid();
	return res;
};
export interface RemoveTagRequest {
	tagId: number;
}
exports.resolveResponseRemoveTagResponse = input => {
	const res = {};
	res.success = input.getSuccess();
	return res;
};
export interface RemoveTagResponse {
	success: boolean;
}
exports.resolveResponseLog = input => {
	const res = {};
	res.id = input.getId();
	res.logType = input.getLogtype();
	res.message = input.getMessage();
	res.messageDate = input.getMessagedate();
	return res;
};
export interface Log {
	id: number;
	logType: number;
	message: string;
	messageDate: number;
}
exports.resolveResponseSearchLogsRequest = input => {
	const res = {};
	res.offset = input.getOffset();
	res.limit = input.getLimit();
	res.messageType = input.getMessagetype();
	res.startDate = input.getStartdate();
	res.endDate = input.getEnddate();
	res.searchWord = input.getSearchword();
	return res;
};
export interface SearchLogsRequest {
	offset: number;
	limit: number;
	messageType: number;
	startDate: number;
	endDate: number;
	searchWord: string;
}
exports.resolveResponseSearchLogsResponse = input => {
	const res = {};
	if (input.getLogs()) {
		res.logs = input.getLogs().map(p => resolvers.resolveResponseTypeLog);
	}
	res.maxLogs = input.getMaxlogs();
	return res;
};
export interface SearchLogsResponse {
	logs: string[];
	maxLogs: number;
}
exports.resolveResponseEwSong = input => {
	const res = {};
	res.id = input.getId();
	res.title = input.getTitle();
	res.author = input.getAuthor();
	res.copyright = input.getCopyright();
	res.administrator = input.getAdministrator();
	res.description = input.getDescription();
	res.tags = input.getTags();
	res.text = input.getText();
	res.variationId = input.getVariationid();
	return res;
};
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
exports.resolveResponseLanguage = input => {
	const res = {};
	res.id = input.getId();
	res.name = input.getName();
	return res;
};
export interface Language {
	id: number;
	name: string;
}
exports.resolveResponseSearchLanguagesRequest = input => {
	const res = {};
	res.offset = input.getOffset();
	res.limit = input.getLimit();
	res.searchWord = input.getSearchword();
	return res;
};
export interface SearchLanguagesRequest {
	offset: number;
	limit: number;
	searchWord: string;
}
exports.resolveResponseSearchLanguagesResponse = input => {
	const res = {};
	if (input.getLanguages()) {
		res.languages = input
			.getLanguages()
			.map(p => resolvers.resolveResponseTypeLanguage);
	}
	res.maxLanguages = input.getMaxlanguages();
	return res;
};
export interface SearchLanguagesResponse {
	languages: string[];
	maxLanguages: number;
}
exports.resolveResponseFetchLanguageByIdRequest = input => {
	const res = {};
	res.languageIds = input.getLanguageidsList();
	return res;
};
export interface FetchLanguageByIdRequest {
	languageIds: number[];
}
exports.resolveResponseFetchLanguageByIdResponse = input => {
	const res = {};
	if (input.getLanguages()) {
		res.languages = input
			.getLanguages()
			.map(p => resolvers.resolveResponseTypeLanguage);
	}
	return res;
};
export interface FetchLanguageByIdResponse {
	languages: string[];
}
exports.resolveResponseCreateLanguageRequest = input => {
	const res = {};
	res.name = input.getName();
	return res;
};
export interface CreateLanguageRequest {
	name: string;
}
exports.resolveResponseCreateLanguageResponse = input => {
	const res = {};
	if (input.getLanguage()) {
		res.language = input.getLanguage();
	}
	return res;
};
export interface CreateLanguageResponse {
	language: string;
}
exports.resolveResponseUpdateLanguageRequest = input => {
	const res = {};
	res.languageId = input.getLanguageid();
	res.name = input.getName();
	return res;
};
export interface UpdateLanguageRequest {
	languageId: number;
	name: string;
}
exports.resolveResponseUpdateLanguageResponse = input => {
	const res = {};
	if (input.getLanguage()) {
		res.language = input.getLanguage();
	}
	res.success = input.getSuccess();
	return res;
};
export interface UpdateLanguageResponse {
	language: string;
	success: boolean;
}
exports.resolveResponseRemoveLanguageRequest = input => {
	const res = {};
	res.languageId = input.getLanguageid();
	return res;
};
export interface RemoveLanguageRequest {
	languageId: number;
}
exports.resolveResponseRemoveLanguageResponse = input => {
	const res = {};
	res.success = input.getSuccess();
	return res;
};
export interface RemoveLanguageResponse {
	success: boolean;
}
exports.resolveResponseSchedule = input => {
	const res = {};
	res.id = input.getId();
	res.name = input.getName();
	res.start = input.getStart();
	res.end = input.getEnd();
	return res;
};
export interface Schedule {
	id: number;
	name: string;
	start: number;
	end: number;
}
exports.resolveResponseSearchSchedulesRequest = input => {
	const res = {};
	res.offset = input.getOffset();
	res.limit = input.getLimit();
	return res;
};
export interface SearchSchedulesRequest {
	offset: number;
	limit: number;
}
exports.resolveResponseSearchSchedulesResponse = input => {
	const res = {};
	if (input.getSchedules()) {
		res.schedules = input
			.getSchedules()
			.map(p => resolvers.resolveResponseTypeSchedule);
	}
	res.maxSchedules = input.getMaxschedules();
	return res;
};
export interface SearchSchedulesResponse {
	schedules: string[];
	maxSchedules: number;
}
exports.resolveResponseFetchScheduleByIdRequest = input => {
	const res = {};
	res.scheduleIds = input.getScheduleidsList();
	return res;
};
export interface FetchScheduleByIdRequest {
	scheduleIds: number[];
}
exports.resolveResponseFetchScheduleByIdResponse = input => {
	const res = {};
	if (input.getSchedules()) {
		res.schedules = input
			.getSchedules()
			.map(p => resolvers.resolveResponseTypeSchedule);
	}
	return res;
};
export interface FetchScheduleByIdResponse {
	schedules: string[];
}
exports.resolveResponseCreateScheduleRequest = input => {
	const res = {};
	res.name = input.getName();
	res.start = input.getStart();
	res.end = input.getEnd();
	return res;
};
export interface CreateScheduleRequest {
	name: string;
	start: number;
	end: number;
}
exports.resolveResponseCreateScheduleResponse = input => {
	const res = {};
	if (input.getSchedule()) {
		res.schedule = input.getSchedule();
	}
	return res;
};
export interface CreateScheduleResponse {
	schedule: string;
}
exports.resolveResponseUpdateScheduleRequest = input => {
	const res = {};
	res.scheduleId = input.getScheduleid();
	res.name = input.getName();
	res.addSongIds = input.getAddsongidsList();
	res.removeSongIds = input.getRemovesongidsList();
	res.changeOrderIds = input.getChangeorderids();
	return res;
};
export interface UpdateScheduleRequest {
	scheduleId: number;
	name: string;
	addSongIds: number[];
	removeSongIds: number[];
	changeOrderIds: number;
}
exports.resolveResponseUpdateScheduleResponse = input => {
	const res = {};
	if (input.getSchedule()) {
		res.schedule = input.getSchedule();
	}
	res.success = input.getSuccess();
	return res;
};
export interface UpdateScheduleResponse {
	schedule: string;
	success: boolean;
}
exports.resolveResponseRemoveScheduleRequest = input => {
	const res = {};
	res.scheduleId = input.getScheduleid();
	return res;
};
export interface RemoveScheduleRequest {
	scheduleId: number;
}
exports.resolveResponseRemoveScheduleResponse = input => {
	const res = {};
	res.success = input.getSuccess();
	return res;
};
export interface RemoveScheduleResponse {
	success: boolean;
}
exports.resolveResponseVariationVersion = input => {
	const res = {};
	res.id = input.getId();
	res.variationId = input.getVariationid();
	res.name = input.getName();
	res.text = input.getText();
	res.version = input.getVersion();
	res.createdAt = input.getCreatedat();
	res.disabledAt = input.getDisabledat();
	return res;
};
export interface VariationVersion {
	id: number;
	variationId: number;
	name: string;
	text: string;
	version: number;
	createdAt: number;
	disabledAt: number;
}
exports.resolveResponseFetchNewestVariationVersionByVariationIdRequest = input => {
	const res = {};
	res.variationIds = input.getVariationidsList();
	return res;
};
export interface FetchNewestVariationVersionByVariationIdRequest {
	variationIds: number[];
}
exports.resolveResponseFetchNewestVariationVersionByVariationIdResponse = input => {
	const res = {};
	if (input.getVariationversions()) {
		res.variationVersions = input
			.getVariationversions()
			.map(p => resolvers.resolveResponseTypeVariationVersion);
	}
	return res;
};
export interface FetchNewestVariationVersionByVariationIdResponse {
	variationVersions: string[];
}
exports.resolveResponseFetchVariationVersionByIdRequest = input => {
	const res = {};
	res.variationVersionIds = input.getVariationversionidsList();
	return res;
};
export interface FetchVariationVersionByIdRequest {
	variationVersionIds: number[];
}
exports.resolveResponseFetchVariationVersionByIdResponse = input => {
	const res = {};
	if (input.getVariationversions()) {
		res.variationVersions = input
			.getVariationversions()
			.map(p => resolvers.resolveResponseTypeVariationVersion);
	}
	return res;
};
export interface FetchVariationVersionByIdResponse {
	variationVersions: string[];
}
exports.resolveResponseAuthor = input => {
	const res = {};
	res.id = input.getId();
	res.name = input.getName();
	return res;
};
export interface Author {
	id: number;
	name: string;
}
exports.resolveResponseFetchAuthorByIdRequest = input => {
	const res = {};
	res.authorIds = input.getAuthoridsList();
	return res;
};
export interface FetchAuthorByIdRequest {
	authorIds: number[];
}
exports.resolveResponseFetchAuthorByIdResponse = input => {
	const res = {};
	if (input.getAuthors()) {
		res.authors = input
			.getAuthors()
			.map(p => resolvers.resolveResponseTypeAuthor);
	}
	return res;
};
export interface FetchAuthorByIdResponse {
	authors: string[];
}
exports.resolveResponseSearchAuthorsRequest = input => {
	const res = {};
	res.offset = input.getOffset();
	res.limit = input.getLimit();
	return res;
};
export interface SearchAuthorsRequest {
	offset: number;
	limit: number;
}
exports.resolveResponseSearchAuthorsResponse = input => {
	const res = {};
	if (input.getAuthors()) {
		res.authors = input
			.getAuthors()
			.map(p => resolvers.resolveResponseTypeAuthor);
	}
	return res;
};
export interface SearchAuthorsResponse {
	authors: string[];
}
exports.resolveResponseCreateAuthorRequest = input => {
	const res = {};
	res.name = input.getName();
	return res;
};
export interface CreateAuthorRequest {
	name: string;
}
exports.resolveResponseCreateAuthorResponse = input => {
	const res = {};
	if (input.getAuthor()) {
		res.author = input.getAuthor();
	}
	return res;
};
export interface CreateAuthorResponse {
	author: string;
}
exports.resolveResponseUpdateAuthorRequest = input => {
	const res = {};
	res.authorId = input.getAuthorid();
	res.name = input.getName();
	return res;
};
export interface UpdateAuthorRequest {
	authorId: number;
	name: string;
}
exports.resolveResponseUpdateAuthorResponse = input => {
	const res = {};
	if (input.getAuthor()) {
		res.author = input.getAuthor();
	}
	res.success = input.getSuccess();
	return res;
};
export interface UpdateAuthorResponse {
	author: string;
	success: boolean;
}
exports.resolveResponseRemoveAuthorRequest = input => {
	const res = {};
	res.authorId = input.getAuthorid();
	return res;
};
export interface RemoveAuthorRequest {
	authorId: number;
}
exports.resolveResponseRemoveAuthorResponse = input => {
	const res = {};
	res.success = input.getSuccess();
	return res;
};
export interface RemoveAuthorResponse {
	success: boolean;
}
exports.resolveResponseVariation = input => {
	const res = {};
	res.id = input.getId();
	res.songId = input.getSongid();
	res.languageId = input.getLanguageid();
	res.authorId = input.getAuthorid();
	res.copyrightId = input.getCopyrightid();
	return res;
};
export interface Variation {
	id: number;
	songId: number;
	languageId: number;
	authorId: number;
	copyrightId: number;
}
exports.resolveResponseSearchVariationsRequest = input => {
	const res = {};
	res.searchWord = input.getSearchword();
	res.songDatabaseId = input.getSongdatabaseid();
	res.songDatabaseFilterId = input.getSongdatabasefilterid();
	res.tagId = input.getTagid();
	res.languageId = input.getLanguageid();
	res.offset = input.getOffset();
	res.limit = input.getLimit();
	res.scheduleId = input.getScheduleid();
	res.skipVariationIds = input.getSkipvariationidsList();
	res.orderBy = input.getOrderby();
	res.searchFrom = input.getSearchfrom();
	return res;
};
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
exports.resolveResponseSearchVariationsResponse = input => {
	const res = {};
	if (input.getVariations()) {
		res.variations = input
			.getVariations()
			.map(p => resolvers.resolveResponseTypeVariation);
	}
	res.maxVariations = input.getMaxvariations();
	return res;
};
export interface SearchVariationsResponse {
	variations: string[];
	maxVariations: number;
}
exports.resolveResponseFetchVariationByIdRequest = input => {
	const res = {};
	res.variationIds = input.getVariationidsList();
	return res;
};
export interface FetchVariationByIdRequest {
	variationIds: number[];
}
exports.resolveResponseFetchVariationByIdResponse = input => {
	const res = {};
	if (input.getVariations()) {
		res.variations = input
			.getVariations()
			.map(p => resolvers.resolveResponseTypeVariation);
	}
	return res;
};
export interface FetchVariationByIdResponse {
	variations: string[];
}
exports.resolveResponseCreateVariationRequest = input => {
	const res = {};
	res.name = input.getName();
	res.text = input.getText();
	res.tagIds = input.getTagidsList();
	res.songDatabaseIds = input.getSongdatabaseidsList();
	return res;
};
export interface CreateVariationRequest {
	name: string;
	text: string;
	tagIds: number[];
	songDatabaseIds: number[];
}
exports.resolveResponseCreateVariationResponse = input => {
	const res = {};
	if (input.getVariation()) {
		res.variation = input.getVariation();
	}
	return res;
};
export interface CreateVariationResponse {
	variation: string;
}
exports.resolveResponseUpdateVariationRequest = input => {
	const res = {};
	res.variationId = input.getVariationid();
	res.name = input.getName();
	res.text = input.getText();
	res.songId = input.getSongid();
	res.languageId = input.getLanguageid();
	res.addTagIds = input.getAddtagidsList();
	res.removeTagIds = input.getRemovetagidsList();
	res.addSongDatabaseIds = input.getAddsongdatabaseidsList();
	res.removeSongDatabaseIds = input.getRemovesongdatabaseidsList();
	return res;
};
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
exports.resolveResponseUpdateVariationResponse = input => {
	const res = {};
	if (input.getVariation()) {
		res.variation = input.getVariation();
	}
	res.success = input.getSuccess();
	return res;
};
export interface UpdateVariationResponse {
	variation: string;
	success: boolean;
}
exports.resolveResponseRemoveVariationRequest = input => {
	const res = {};
	res.variationId = input.getVariationid();
	return res;
};
export interface RemoveVariationRequest {
	variationId: number;
}
exports.resolveResponseRemoveVariationResponse = input => {
	const res = {};
	res.success = input.getSuccess();
	return res;
};
export interface RemoveVariationResponse {
	success: boolean;
}
exports.resolveResponseCopyright = input => {
	const res = {};
	res.id = input.getId();
	res.name = input.getName();
	return res;
};
export interface Copyright {
	id: number;
	name: string;
}
exports.resolveResponseFetchCopyrightByIdRequest = input => {
	const res = {};
	res.copyrightIds = input.getCopyrightidsList();
	return res;
};
export interface FetchCopyrightByIdRequest {
	copyrightIds: number[];
}
exports.resolveResponseFetchCopyrightByIdResponse = input => {
	const res = {};
	if (input.getCopyrights()) {
		res.copyrights = input
			.getCopyrights()
			.map(p => resolvers.resolveResponseTypeCopyright);
	}
	return res;
};
export interface FetchCopyrightByIdResponse {
	copyrights: string[];
}
exports.resolveResponseSearchCopyrightsRequest = input => {
	const res = {};
	res.offset = input.getOffset();
	res.limit = input.getLimit();
	return res;
};
export interface SearchCopyrightsRequest {
	offset: number;
	limit: number;
}
exports.resolveResponseSearchCopyrightsResponse = input => {
	const res = {};
	if (input.getCopyrights()) {
		res.copyrights = input
			.getCopyrights()
			.map(p => resolvers.resolveResponseTypeCopyright);
	}
	return res;
};
export interface SearchCopyrightsResponse {
	copyrights: string[];
}
exports.resolveResponseCreateCopyrightRequest = input => {
	const res = {};
	res.name = input.getName();
	return res;
};
export interface CreateCopyrightRequest {
	name: string;
}
exports.resolveResponseCreateCopyrightResponse = input => {
	const res = {};
	if (input.getCopyright()) {
		res.copyright = input.getCopyright();
	}
	return res;
};
export interface CreateCopyrightResponse {
	copyright: string;
}
exports.resolveResponseUpdateCopyrightRequest = input => {
	const res = {};
	res.copyrightId = input.getCopyrightid();
	res.name = input.getName();
	return res;
};
export interface UpdateCopyrightRequest {
	copyrightId: number;
	name: string;
}
exports.resolveResponseUpdateCopyrightResponse = input => {
	const res = {};
	if (input.getCopyright()) {
		res.copyright = input.getCopyright();
	}
	res.success = input.getSuccess();
	return res;
};
export interface UpdateCopyrightResponse {
	copyright: string;
	success: boolean;
}
exports.resolveResponseRemoveCopyrightRequest = input => {
	const res = {};
	res.copyrightId = input.getCopyrightid();
	return res;
};
export interface RemoveCopyrightRequest {
	copyrightId: number;
}
exports.resolveResponseRemoveCopyrightResponse = input => {
	const res = {};
	res.success = input.getSuccess();
	return res;
};
export interface RemoveCopyrightResponse {
	success: boolean;
}
exports.resolveResponseMatiasClient = input => {
	const res = {};
	res.id = input.getId();
	res.name = input.getName();
	res.hostName = input.getHostname();
	res.key = input.getKey();
	res.accepted = input.getAccepted();
	res.connected = input.getConnected();
	return res;
};
export interface MatiasClient {
	id: number;
	name: string;
	hostName: string;
	key: string;
	accepted: boolean;
	connected: boolean;
}
exports.resolveResponseSearchMatiasClientsRequest = input => {
	const res = {};

	return res;
};
export interface SearchMatiasClientsRequest {}
exports.resolveResponseSearchMatiasClientsResponse = input => {
	const res = {};
	if (input.getMatiasclients()) {
		res.matiasClients = input
			.getMatiasclients()
			.map(p => resolvers.resolveResponseTypeMatiasClient);
	}
	res.maxMatiasClients = input.getMaxmatiasclients();
	return res;
};
export interface SearchMatiasClientsResponse {
	matiasClients: string[];
	maxMatiasClients: number;
}
exports.resolveResponseFetchMatiasClientRequest = input => {
	const res = {};
	res.matiasClientIds = input.getMatiasclientidsList();
	return res;
};
export interface FetchMatiasClientRequest {
	matiasClientIds: number[];
}
exports.resolveResponseFetchMatiasClientResponse = input => {
	const res = {};
	if (input.getMatiasclients()) {
		res.matiasClients = input
			.getMatiasclients()
			.map(p => resolvers.resolveResponseTypeMatiasClient);
	}
	return res;
};
export interface FetchMatiasClientResponse {
	matiasClients: string[];
}
exports.resolveResponseFetchMatiasClientEwDatabasesRequest = input => {
	const res = {};
	res.matiasClientIds = input.getMatiasclientidsList();
	return res;
};
export interface FetchMatiasClientEwDatabasesRequest {
	matiasClientIds: number[];
}
exports.resolveResponseFetchMatiasClientEwDatabasesResponse = input => {
	const res = {};
	if (input.getEwdatabases()) {
		res.ewDatabases = input.getEwdatabases();
	}
	return res;
};
export interface FetchMatiasClientEwDatabasesResponse {
	ewDatabases: string;
}
export enum MatiasClientAcceptedState {
	EMPTY = 0,
	ACEPTED = 1,
	DECLINED = 2
}exports.resolveResponseUpdateMatiasClientRequest = input => {
	const res = {};
	res.matiasClientId = input.getMatiasclientid();
	if (input.getState()) {
		res.state = input.getState();
	}
	res.name = input.getName();
	return res;
};
export interface UpdateMatiasClientRequest {
	matiasClientId: number;
	state: string;
	name: string;
}
exports.resolveResponseUpdateMatiasClientResponse = input => {
	const res = {};
	res.success = input.getSuccess();
	if (input.getMatiasclient()) {
		res.matiasClient = input.getMatiasclient();
	}
	return res;
};
export interface UpdateMatiasClientResponse {
	success: boolean;
	matiasClient: string;
}
