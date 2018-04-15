const grpc = require("grpc");
const service = require("./seppo_service_grpc_pb");
const messages = require("./seppo_service_pb");
const resolvers = require("./resolvers");exports.resolveRequestSongDatabase = input => {
	const req = new messages.SongDatabase();
	req.setId(input.id);
	req.setName(input.name);
	req.setVersion(input.version);
	return req;
};
exports.resolveRequestSearchSongDatabasesRequest = input => {
	const req = new messages.SearchSongDatabasesRequest();
	req.setOffset(input.offset);
	req.setLimit(input.limit);
	req.setSearchword(input.searchWord);
	req.setVariationid(input.variationId);
	return req;
};
exports.resolveRequestSearchSongDatabasesResponse = input => {
	const req = new messages.SearchSongDatabasesResponse();
	if (input.songDatabases) {
		req.setsongDatabasesList(
			input.fieldName.map(p => resolvers.resolveRequestSongDatabase(p))
		);
	}
	req.setMaxsongdatabases(input.maxSongDatabases);
	return req;
};
exports.resolveRequestFetchSongDatabaseByIdRequest = input => {
	const req = new messages.FetchSongDatabaseByIdRequest();
	req.setSongdatabaseidsList(input.songDatabaseIds);
	return req;
};
exports.resolveRequestFetchSongDatabaseByIdResponse = input => {
	const req = new messages.FetchSongDatabaseByIdResponse();
	if (input.songDatabases) {
		req.setsongDatabasesList(
			input.fieldName.map(p => resolvers.resolveRequestSongDatabase(p))
		);
	}
	return req;
};
exports.resolveRequestCreateSongDatabaseRequest = input => {
	const req = new messages.CreateSongDatabaseRequest();
	req.setName(input.name);
	return req;
};
exports.resolveRequestCreateSongDatabaseResponse = input => {
	const req = new messages.CreateSongDatabaseResponse();
	if (input.songDatabase) {
		req.setSongdatabase(
			resolvers.resolveRequestSongDatabase(input.songDatabase)
		);
	}
	return req;
};
exports.resolveRequestUpdateSongDatabaseRequest = input => {
	const req = new messages.UpdateSongDatabaseRequest();
	req.setSongdatabaseid(input.songDatabaseId);
	req.setName(input.name);
	req.setAddtagidsList(input.addTagIds);
	req.setRemovetagidsList(input.removeTagIds);
	return req;
};
exports.resolveRequestUpdateSongDatabaseResponse = input => {
	const req = new messages.UpdateSongDatabaseResponse();
	if (input.songDatabase) {
		req.setSongdatabase(
			resolvers.resolveRequestSongDatabase(input.songDatabase)
		);
	}
	req.setSuccess(input.success);
	return req;
};
exports.resolveRequestRemoveSongDatabaseRequest = input => {
	const req = new messages.RemoveSongDatabaseRequest();
	req.setSongdatabaseid(input.songDatabaseId);
	return req;
};
exports.resolveRequestRemoveSongDatabaseResponse = input => {
	const req = new messages.RemoveSongDatabaseResponse();
	req.setSuccess(input.success);
	return req;
};
exports.resolveRequestEwSong = input => {
	const req = new messages.EwSong();
	req.setId(input.id);
	req.setTitle(input.title);
	req.setAuthor(input.author);
	req.setCopyright(input.copyright);
	req.setAdministrator(input.administrator);
	req.setDescription(input.description);
	req.setTags(input.tags);
	req.setText(input.text);
	req.setVariationid(input.variationId);
	return req;
};
exports.resolveRequestEwDatabase = input => {
	const req = new messages.EwDatabase();
	req.setId(input.id);
	req.setName(input.name);
	req.setSongdatabaseid(input.songDatabaseId);
	req.setFilesystempath(input.filesystemPath);
	req.setMatiasclientid(input.matiasClientId);
	req.setRemovesongsfromewdatabase(input.removeSongsFromEwDatabase);
	req.setRemovesongsfromsongdatabase(input.removeSongsFromSongDatabase);
	req.setVariationversionconflictaction(input.variationVersionConflictAction);
	req.setAccepted(input.accepted);
	return req;
};
exports.resolveRequestSearchEwDatabasesRequest = input => {
	const req = new messages.SearchEwDatabasesRequest();
	req.setOffset(input.offset);
	req.setLimit(input.limit);
	req.setSongdatabaseid(input.songDatabaseId);
	req.setMatiasclientid(input.matiasClientId);
	return req;
};
exports.resolveRequestSearchEwDatabasesResponse = input => {
	const req = new messages.SearchEwDatabasesResponse();
	if (input.ewDatabases) {
		req.setewDatabasesList(
			input.fieldName.map(p => resolvers.resolveRequestEwDatabase(p))
		);
	}
	req.setMaxewdatabases(input.maxEwDatabases);
	return req;
};
exports.resolveRequestFetchEwDatabaseByIdRequest = input => {
	const req = new messages.FetchEwDatabaseByIdRequest();
	req.setEwdatabaseidsList(input.ewDatabaseIds);
	return req;
};
exports.resolveRequestFetchEwDatabaseByIdResponse = input => {
	const req = new messages.FetchEwDatabaseByIdResponse();
	if (input.ewDatabases) {
		req.setewDatabasesList(
			input.fieldName.map(p => resolvers.resolveRequestEwDatabase(p))
		);
	}
	return req;
};
exports.resolveRequestCreateEwDatabaseRequest = input => {
	const req = new messages.CreateEwDatabaseRequest();
	req.setSongdatabaseid(input.songDatabaseId);
	req.setName(input.name);
	req.setFilesystempath(input.filesystemPath);
	req.setMatiasclientid(input.matiasClientId);
	return req;
};
exports.resolveRequestCreateEwDatabaseResponse = input => {
	const req = new messages.CreateEwDatabaseResponse();
	if (input.ewDatabase) {
		req.setEwdatabase(resolvers.resolveRequestEwDatabase(input.ewDatabase));
	}
	return req;
};
exports.resolveRequestUpdateEwDatabaseRequest = input => {
	const req = new messages.UpdateEwDatabaseRequest();
	req.setEwdatabaseid(input.ewDatabaseId);
	req.setName(input.name);
	req.setSongdatabaseid(input.songDatabaseId);
	req.setRemovesongsfromewdatabase(input.removeSongsFromEwDatabase);
	req.setRemovesongsfromsongdatabase(input.removeSongsFromSongDatabase);
	req.setVariationversionconflictaction(input.variationVersionConflictAction);
	req.setAccepted(input.accepted);
	return req;
};
exports.resolveRequestUpdateEwDatabaseResponse = input => {
	const req = new messages.UpdateEwDatabaseResponse();
	if (input.ewDatabase) {
		req.setEwdatabase(resolvers.resolveRequestEwDatabase(input.ewDatabase));
	}
	req.setSuccess(input.success);
	return req;
};
exports.resolveRequestRemoveEwDatabaseRequest = input => {
	const req = new messages.RemoveEwDatabaseRequest();
	req.setEwdatabaseid(input.ewDatabaseId);
	return req;
};
exports.resolveRequestRemoveEwDatabaseResponse = input => {
	const req = new messages.RemoveEwDatabaseResponse();
	req.setSuccess(input.success);
	return req;
};
exports.resolveRequestLog = input => {
	const req = new messages.Log();
	req.setId(input.id);
	req.setLogtype(input.logType);
	req.setMessage(input.message);
	req.setMessagedate(input.messageDate);
	return req;
};
exports.resolveRequestSearchLogsRequest = input => {
	const req = new messages.SearchLogsRequest();
	req.setOffset(input.offset);
	req.setLimit(input.limit);
	req.setMessagetype(input.messageType);
	req.setStartdate(input.startDate);
	req.setEnddate(input.endDate);
	req.setSearchword(input.searchWord);
	return req;
};
exports.resolveRequestSearchLogsResponse = input => {
	const req = new messages.SearchLogsResponse();
	if (input.logs) {
		req.setlogsList(
			input.fieldName.map(p => resolvers.resolveRequestLog(p))
		);
	}
	req.setMaxlogs(input.maxLogs);
	return req;
};
exports.resolveRequestSchedule = input => {
	const req = new messages.Schedule();
	req.setId(input.id);
	req.setName(input.name);
	req.setStart(input.start);
	req.setEnd(input.end);
	return req;
};
exports.resolveRequestSearchSchedulesRequest = input => {
	const req = new messages.SearchSchedulesRequest();
	req.setOffset(input.offset);
	req.setLimit(input.limit);
	return req;
};
exports.resolveRequestSearchSchedulesResponse = input => {
	const req = new messages.SearchSchedulesResponse();
	if (input.schedules) {
		req.setschedulesList(
			input.fieldName.map(p => resolvers.resolveRequestSchedule(p))
		);
	}
	req.setMaxschedules(input.maxSchedules);
	return req;
};
exports.resolveRequestFetchScheduleByIdRequest = input => {
	const req = new messages.FetchScheduleByIdRequest();
	req.setScheduleidsList(input.scheduleIds);
	return req;
};
exports.resolveRequestFetchScheduleByIdResponse = input => {
	const req = new messages.FetchScheduleByIdResponse();
	if (input.schedules) {
		req.setschedulesList(
			input.fieldName.map(p => resolvers.resolveRequestSchedule(p))
		);
	}
	return req;
};
exports.resolveRequestCreateScheduleRequest = input => {
	const req = new messages.CreateScheduleRequest();
	req.setName(input.name);
	req.setStart(input.start);
	req.setEnd(input.end);
	return req;
};
exports.resolveRequestCreateScheduleResponse = input => {
	const req = new messages.CreateScheduleResponse();
	if (input.schedule) {
		req.setSchedule(resolvers.resolveRequestSchedule(input.schedule));
	}
	return req;
};
exports.resolveRequestUpdateScheduleRequest = input => {
	const req = new messages.UpdateScheduleRequest();
	req.setScheduleid(input.scheduleId);
	req.setName(input.name);
	req.setAddsongidsList(input.addSongIds);
	req.setRemovesongidsList(input.removeSongIds);
	req.setChangeorderids(input.changeOrderIds);
	return req;
};
exports.resolveRequestUpdateScheduleResponse = input => {
	const req = new messages.UpdateScheduleResponse();
	if (input.schedule) {
		req.setSchedule(resolvers.resolveRequestSchedule(input.schedule));
	}
	req.setSuccess(input.success);
	return req;
};
exports.resolveRequestRemoveScheduleRequest = input => {
	const req = new messages.RemoveScheduleRequest();
	req.setScheduleid(input.scheduleId);
	return req;
};
exports.resolveRequestRemoveScheduleResponse = input => {
	const req = new messages.RemoveScheduleResponse();
	req.setSuccess(input.success);
	return req;
};
exports.resolveRequestLanguage = input => {
	const req = new messages.Language();
	req.setId(input.id);
	req.setName(input.name);
	return req;
};
exports.resolveRequestSearchLanguagesRequest = input => {
	const req = new messages.SearchLanguagesRequest();
	req.setOffset(input.offset);
	req.setLimit(input.limit);
	req.setSearchword(input.searchWord);
	return req;
};
exports.resolveRequestSearchLanguagesResponse = input => {
	const req = new messages.SearchLanguagesResponse();
	if (input.languages) {
		req.setlanguagesList(
			input.fieldName.map(p => resolvers.resolveRequestLanguage(p))
		);
	}
	req.setMaxlanguages(input.maxLanguages);
	return req;
};
exports.resolveRequestFetchLanguageByIdRequest = input => {
	const req = new messages.FetchLanguageByIdRequest();
	req.setLanguageidsList(input.languageIds);
	return req;
};
exports.resolveRequestFetchLanguageByIdResponse = input => {
	const req = new messages.FetchLanguageByIdResponse();
	if (input.languages) {
		req.setlanguagesList(
			input.fieldName.map(p => resolvers.resolveRequestLanguage(p))
		);
	}
	return req;
};
exports.resolveRequestCreateLanguageRequest = input => {
	const req = new messages.CreateLanguageRequest();
	req.setName(input.name);
	return req;
};
exports.resolveRequestCreateLanguageResponse = input => {
	const req = new messages.CreateLanguageResponse();
	if (input.language) {
		req.setLanguage(resolvers.resolveRequestLanguage(input.language));
	}
	return req;
};
exports.resolveRequestUpdateLanguageRequest = input => {
	const req = new messages.UpdateLanguageRequest();
	req.setLanguageid(input.languageId);
	req.setName(input.name);
	return req;
};
exports.resolveRequestUpdateLanguageResponse = input => {
	const req = new messages.UpdateLanguageResponse();
	if (input.language) {
		req.setLanguage(resolvers.resolveRequestLanguage(input.language));
	}
	req.setSuccess(input.success);
	return req;
};
exports.resolveRequestRemoveLanguageRequest = input => {
	const req = new messages.RemoveLanguageRequest();
	req.setLanguageid(input.languageId);
	return req;
};
exports.resolveRequestRemoveLanguageResponse = input => {
	const req = new messages.RemoveLanguageResponse();
	req.setSuccess(input.success);
	return req;
};
exports.resolveRequestVariationVersion = input => {
	const req = new messages.VariationVersion();
	req.setId(input.id);
	req.setVariationid(input.variationId);
	req.setName(input.name);
	req.setText(input.text);
	req.setVersion(input.version);
	req.setCreatedat(input.createdAt);
	req.setDisabledat(input.disabledAt);
	return req;
};
exports.resolveRequestFetchNewestVariationVersionByVariationIdRequest = input => {
	const req = new messages.FetchNewestVariationVersionByVariationIdRequest();
	req.setVariationidsList(input.variationIds);
	return req;
};
exports.resolveRequestFetchNewestVariationVersionByVariationIdResponse = input => {
	const req = new messages.FetchNewestVariationVersionByVariationIdResponse();
	if (input.variationVersions) {
		req.setvariationVersionsList(
			input.fieldName.map(p =>
				resolvers.resolveRequestVariationVersion(p)
			)
		);
	}
	return req;
};
exports.resolveRequestFetchVariationVersionByIdRequest = input => {
	const req = new messages.FetchVariationVersionByIdRequest();
	req.setVariationversionidsList(input.variationVersionIds);
	return req;
};
exports.resolveRequestFetchVariationVersionByIdResponse = input => {
	const req = new messages.FetchVariationVersionByIdResponse();
	if (input.variationVersions) {
		req.setvariationVersionsList(
			input.fieldName.map(p =>
				resolvers.resolveRequestVariationVersion(p)
			)
		);
	}
	return req;
};
exports.resolveRequestTag = input => {
	const req = new messages.Tag();
	req.setId(input.id);
	req.setName(input.name);
	return req;
};
exports.resolveRequestSearchTagsRequest = input => {
	const req = new messages.SearchTagsRequest();
	req.setSongdatabaseid(input.songDatabaseId);
	req.setVariationid(input.variationId);
	req.setOffset(input.offset);
	req.setLimit(input.limit);
	req.setSearchword(input.searchWord);
	return req;
};
exports.resolveRequestSearchTagsResponse = input => {
	const req = new messages.SearchTagsResponse();
	if (input.tags) {
		req.settagsList(
			input.fieldName.map(p => resolvers.resolveRequestTag(p))
		);
	}
	req.setMaxtags(input.maxTags);
	return req;
};
exports.resolveRequestFetchTagByIdRequest = input => {
	const req = new messages.FetchTagByIdRequest();
	req.setTagidsList(input.tagIds);
	return req;
};
exports.resolveRequestFetchTagByIdResponse = input => {
	const req = new messages.FetchTagByIdResponse();
	if (input.tags) {
		req.settagsList(
			input.fieldName.map(p => resolvers.resolveRequestTag(p))
		);
	}
	return req;
};
exports.resolveRequestCreateTagRequest = input => {
	const req = new messages.CreateTagRequest();
	req.setName(input.name);
	return req;
};
exports.resolveRequestCreateTagResponse = input => {
	const req = new messages.CreateTagResponse();
	if (input.tag) {
		req.setTag(resolvers.resolveRequestTag(input.tag));
	}
	return req;
};
exports.resolveRequestUpdateTagRequest = input => {
	const req = new messages.UpdateTagRequest();
	req.setTagid(input.tagId);
	req.setName(input.name);
	return req;
};
exports.resolveRequestUpdateTagResponse = input => {
	const req = new messages.UpdateTagResponse();
	if (input.tag) {
		req.setTag(resolvers.resolveRequestTag(input.tag));
	}
	req.setSuccess(input.Success);
	return req;
};
exports.resolveRequestRemoveTagRequest = input => {
	const req = new messages.RemoveTagRequest();
	req.setTagid(input.tagId);
	return req;
};
exports.resolveRequestRemoveTagResponse = input => {
	const req = new messages.RemoveTagResponse();
	req.setSuccess(input.success);
	return req;
};
exports.resolveRequestAuthor = input => {
	const req = new messages.Author();
	req.setId(input.id);
	req.setName(input.name);
	return req;
};
exports.resolveRequestFetchAuthorByIdRequest = input => {
	const req = new messages.FetchAuthorByIdRequest();
	req.setAuthoridsList(input.authorIds);
	return req;
};
exports.resolveRequestFetchAuthorByIdResponse = input => {
	const req = new messages.FetchAuthorByIdResponse();
	if (input.authors) {
		req.setauthorsList(
			input.fieldName.map(p => resolvers.resolveRequestAuthor(p))
		);
	}
	return req;
};
exports.resolveRequestSearchAuthorsRequest = input => {
	const req = new messages.SearchAuthorsRequest();
	req.setOffset(input.offset);
	req.setLimit(input.limit);
	return req;
};
exports.resolveRequestSearchAuthorsResponse = input => {
	const req = new messages.SearchAuthorsResponse();
	if (input.authors) {
		req.setauthorsList(
			input.fieldName.map(p => resolvers.resolveRequestAuthor(p))
		);
	}
	return req;
};
exports.resolveRequestCreateAuthorRequest = input => {
	const req = new messages.CreateAuthorRequest();
	req.setName(input.name);
	return req;
};
exports.resolveRequestCreateAuthorResponse = input => {
	const req = new messages.CreateAuthorResponse();
	if (input.author) {
		req.setAuthor(resolvers.resolveRequestAuthor(input.author));
	}
	return req;
};
exports.resolveRequestUpdateAuthorRequest = input => {
	const req = new messages.UpdateAuthorRequest();
	req.setAuthorid(input.authorId);
	req.setName(input.name);
	return req;
};
exports.resolveRequestUpdateAuthorResponse = input => {
	const req = new messages.UpdateAuthorResponse();
	if (input.author) {
		req.setAuthor(resolvers.resolveRequestAuthor(input.author));
	}
	req.setSuccess(input.success);
	return req;
};
exports.resolveRequestRemoveAuthorRequest = input => {
	const req = new messages.RemoveAuthorRequest();
	req.setAuthorid(input.authorId);
	return req;
};
exports.resolveRequestRemoveAuthorResponse = input => {
	const req = new messages.RemoveAuthorResponse();
	req.setSuccess(input.success);
	return req;
};
exports.resolveRequestCopyright = input => {
	const req = new messages.Copyright();
	req.setId(input.id);
	req.setName(input.name);
	return req;
};
exports.resolveRequestFetchCopyrightByIdRequest = input => {
	const req = new messages.FetchCopyrightByIdRequest();
	req.setCopyrightidsList(input.copyrightIds);
	return req;
};
exports.resolveRequestFetchCopyrightByIdResponse = input => {
	const req = new messages.FetchCopyrightByIdResponse();
	if (input.copyrights) {
		req.setcopyrightsList(
			input.fieldName.map(p => resolvers.resolveRequestCopyright(p))
		);
	}
	return req;
};
exports.resolveRequestSearchCopyrightsRequest = input => {
	const req = new messages.SearchCopyrightsRequest();
	req.setOffset(input.offset);
	req.setLimit(input.limit);
	return req;
};
exports.resolveRequestSearchCopyrightsResponse = input => {
	const req = new messages.SearchCopyrightsResponse();
	if (input.copyrights) {
		req.setcopyrightsList(
			input.fieldName.map(p => resolvers.resolveRequestCopyright(p))
		);
	}
	return req;
};
exports.resolveRequestCreateCopyrightRequest = input => {
	const req = new messages.CreateCopyrightRequest();
	req.setName(input.name);
	return req;
};
exports.resolveRequestCreateCopyrightResponse = input => {
	const req = new messages.CreateCopyrightResponse();
	if (input.copyright) {
		req.setCopyright(resolvers.resolveRequestCopyright(input.copyright));
	}
	return req;
};
exports.resolveRequestUpdateCopyrightRequest = input => {
	const req = new messages.UpdateCopyrightRequest();
	req.setCopyrightid(input.copyrightId);
	req.setName(input.name);
	return req;
};
exports.resolveRequestUpdateCopyrightResponse = input => {
	const req = new messages.UpdateCopyrightResponse();
	if (input.copyright) {
		req.setCopyright(resolvers.resolveRequestCopyright(input.copyright));
	}
	req.setSuccess(input.success);
	return req;
};
exports.resolveRequestRemoveCopyrightRequest = input => {
	const req = new messages.RemoveCopyrightRequest();
	req.setCopyrightid(input.copyrightId);
	return req;
};
exports.resolveRequestRemoveCopyrightResponse = input => {
	const req = new messages.RemoveCopyrightResponse();
	req.setSuccess(input.success);
	return req;
};
exports.resolveRequestMatiasClient = input => {
	const req = new messages.MatiasClient();
	req.setId(input.id);
	req.setName(input.name);
	req.setHostname(input.hostName);
	req.setKey(input.key);
	req.setAccepted(input.accepted);
	req.setConnected(input.connected);
	return req;
};
exports.resolveRequestSearchMatiasClientsRequest = input => {
	const req = new messages.SearchMatiasClientsRequest();

	return req;
};
exports.resolveRequestSearchMatiasClientsResponse = input => {
	const req = new messages.SearchMatiasClientsResponse();
	if (input.matiasClients) {
		req.setmatiasClientsList(
			input.fieldName.map(p => resolvers.resolveRequestMatiasClient(p))
		);
	}
	req.setMaxmatiasclients(input.maxMatiasClients);
	return req;
};
exports.resolveRequestFetchMatiasClientRequest = input => {
	const req = new messages.FetchMatiasClientRequest();
	req.setMatiasclientidsList(input.matiasClientIds);
	return req;
};
exports.resolveRequestFetchMatiasClientResponse = input => {
	const req = new messages.FetchMatiasClientResponse();
	if (input.matiasClients) {
		req.setmatiasClientsList(
			input.fieldName.map(p => resolvers.resolveRequestMatiasClient(p))
		);
	}
	return req;
};
exports.resolveRequestFetchMatiasClientEwDatabasesRequest = input => {
	const req = new messages.FetchMatiasClientEwDatabasesRequest();
	req.setMatiasclientidsList(input.matiasClientIds);
	return req;
};
exports.resolveRequestFetchMatiasClientEwDatabasesResponse = input => {
	const req = new messages.FetchMatiasClientEwDatabasesResponse();
	if (input.ewDatabases) {
		req.setEwdatabases(
			resolvers.resolveRequestEwDatabases(input.ewDatabases)
		);
	}
	return req;
};
exports.resolveRequestUpdateMatiasClientRequest = input => {
	const req = new messages.UpdateMatiasClientRequest();
	req.setMatiasclientid(input.matiasClientId);
	if (input.state) {
		req.setState(
			resolvers.resolveRequestMatiasClientAcceptedState(input.state)
		);
	}
	req.setName(input.name);
	return req;
};
exports.resolveRequestUpdateMatiasClientResponse = input => {
	const req = new messages.UpdateMatiasClientResponse();
	req.setSuccess(input.success);
	if (input.matiasClient) {
		req.setMatiasclient(
			resolvers.resolveRequestMatiasClient(input.matiasClient)
		);
	}
	return req;
};
exports.resolveRequestVariation = input => {
	const req = new messages.Variation();
	req.setId(input.id);
	req.setSongid(input.songId);
	req.setLanguageid(input.languageId);
	req.setAuthorid(input.authorId);
	req.setCopyrightid(input.copyrightId);
	return req;
};
exports.resolveRequestSearchVariationsRequest = input => {
	const req = new messages.SearchVariationsRequest();
	req.setSearchword(input.searchWord);
	req.setSongdatabaseid(input.songDatabaseId);
	req.setSongdatabasefilterid(input.songDatabaseFilterId);
	req.setTagid(input.tagId);
	req.setLanguageid(input.languageId);
	req.setOffset(input.offset);
	req.setLimit(input.limit);
	req.setScheduleid(input.scheduleId);
	req.setSkipvariationidsList(input.skipVariationIds);
	req.setOrderby(input.orderBy);
	req.setSearchfrom(input.searchFrom);
	return req;
};
exports.resolveRequestSearchVariationsResponse = input => {
	const req = new messages.SearchVariationsResponse();
	if (input.variations) {
		req.setvariationsList(
			input.fieldName.map(p => resolvers.resolveRequestVariation(p))
		);
	}
	req.setMaxvariations(input.maxVariations);
	return req;
};
exports.resolveRequestFetchVariationByIdRequest = input => {
	const req = new messages.FetchVariationByIdRequest();
	req.setVariationidsList(input.variationIds);
	return req;
};
exports.resolveRequestFetchVariationByIdResponse = input => {
	const req = new messages.FetchVariationByIdResponse();
	if (input.variations) {
		req.setvariationsList(
			input.fieldName.map(p => resolvers.resolveRequestVariation(p))
		);
	}
	return req;
};
exports.resolveRequestCreateVariationRequest = input => {
	const req = new messages.CreateVariationRequest();
	req.setName(input.name);
	req.setText(input.text);
	req.setTagidsList(input.tagIds);
	req.setSongdatabaseidsList(input.songDatabaseIds);
	return req;
};
exports.resolveRequestCreateVariationResponse = input => {
	const req = new messages.CreateVariationResponse();
	if (input.variation) {
		req.setVariation(resolvers.resolveRequestVariation(input.variation));
	}
	return req;
};
exports.resolveRequestUpdateVariationRequest = input => {
	const req = new messages.UpdateVariationRequest();
	req.setVariationid(input.variationId);
	req.setName(input.name);
	req.setText(input.text);
	req.setSongid(input.songId);
	req.setLanguageid(input.languageId);
	req.setAddtagidsList(input.addTagIds);
	req.setRemovetagidsList(input.removeTagIds);
	req.setAddsongdatabaseidsList(input.addSongDatabaseIds);
	req.setRemovesongdatabaseidsList(input.removeSongDatabaseIds);
	return req;
};
exports.resolveRequestUpdateVariationResponse = input => {
	const req = new messages.UpdateVariationResponse();
	if (input.variation) {
		req.setVariation(resolvers.resolveRequestVariation(input.variation));
	}
	req.setSuccess(input.success);
	return req;
};
exports.resolveRequestRemoveVariationRequest = input => {
	const req = new messages.RemoveVariationRequest();
	req.setVariationid(input.variationId);
	return req;
};
exports.resolveRequestRemoveVariationResponse = input => {
	const req = new messages.RemoveVariationResponse();
	req.setSuccess(input.success);
	return req;
};
