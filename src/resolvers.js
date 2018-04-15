const grpc = require("grpc");
const service = require("./seppo_service_grpc_pb");
const messages = require("./seppo_service_pb");
const resolvers = require("./resolvers");exports.resolveRequestSongDatabase = input => {
	const req = new messages.SongDatabase();
	req.setIdList(input.id);
	req.setNameList(input.name);
	req.setVersionList(input.version);
	return req;
};
exports.resolveRequestSearchSongDatabasesRequest = input => {
	const req = new messages.SearchSongDatabasesRequest();
	req.setOffsetList(input.offset);
	req.setLimitList(input.limit);
	req.setSearchwordList(input.searchWord);
	req.setVariationidList(input.variationId);
	return req;
};
exports.resolveRequestSearchSongDatabasesResponse = input => {
	const req = new messages.SearchSongDatabasesResponse();
	if (input.songDatabases) {
		req.setsongDatabasesList(
			input.fieldName.map(p => resolvers.resolveRequestSongDatabase(p))
		);
	}
	req.setMaxsongdatabasesList(input.maxSongDatabases);
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
	req.setNameList(input.name);
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
	req.setSongdatabaseidList(input.songDatabaseId);
	req.setNameList(input.name);
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
	req.setSuccessList(input.success);
	return req;
};
exports.resolveRequestRemoveSongDatabaseRequest = input => {
	const req = new messages.RemoveSongDatabaseRequest();
	req.setSongdatabaseidList(input.songDatabaseId);
	return req;
};
exports.resolveRequestRemoveSongDatabaseResponse = input => {
	const req = new messages.RemoveSongDatabaseResponse();
	req.setSuccessList(input.success);
	return req;
};
exports.resolveRequestEwDatabase = input => {
	const req = new messages.EwDatabase();
	req.setIdList(input.id);
	req.setNameList(input.name);
	req.setSongdatabaseidList(input.songDatabaseId);
	req.setFilesystempathList(input.filesystemPath);
	req.setMatiasclientidList(input.matiasClientId);
	req.setRemovesongsfromewdatabaseList(input.removeSongsFromEwDatabase);
	req.setRemovesongsfromsongdatabaseList(input.removeSongsFromSongDatabase);
	req.setVariationversionconflictactionList(
		input.variationVersionConflictAction
	);
	req.setAcceptedList(input.accepted);
	return req;
};
exports.resolveRequestSearchEwDatabasesRequest = input => {
	const req = new messages.SearchEwDatabasesRequest();
	req.setOffsetList(input.offset);
	req.setLimitList(input.limit);
	req.setSongdatabaseidList(input.songDatabaseId);
	req.setMatiasclientidList(input.matiasClientId);
	return req;
};
exports.resolveRequestSearchEwDatabasesResponse = input => {
	const req = new messages.SearchEwDatabasesResponse();
	if (input.ewDatabases) {
		req.setewDatabasesList(
			input.fieldName.map(p => resolvers.resolveRequestEwDatabase(p))
		);
	}
	req.setMaxewdatabasesList(input.maxEwDatabases);
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
	req.setSongdatabaseidList(input.songDatabaseId);
	req.setNameList(input.name);
	req.setFilesystempathList(input.filesystemPath);
	req.setMatiasclientidList(input.matiasClientId);
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
	req.setEwdatabaseidList(input.ewDatabaseId);
	req.setNameList(input.name);
	req.setSongdatabaseidList(input.songDatabaseId);
	req.setRemovesongsfromewdatabaseList(input.removeSongsFromEwDatabase);
	req.setRemovesongsfromsongdatabaseList(input.removeSongsFromSongDatabase);
	req.setVariationversionconflictactionList(
		input.variationVersionConflictAction
	);
	req.setAcceptedList(input.accepted);
	return req;
};
exports.resolveRequestUpdateEwDatabaseResponse = input => {
	const req = new messages.UpdateEwDatabaseResponse();
	if (input.ewDatabase) {
		req.setEwdatabase(resolvers.resolveRequestEwDatabase(input.ewDatabase));
	}
	req.setSuccessList(input.success);
	return req;
};
exports.resolveRequestRemoveEwDatabaseRequest = input => {
	const req = new messages.RemoveEwDatabaseRequest();
	req.setEwdatabaseidList(input.ewDatabaseId);
	return req;
};
exports.resolveRequestRemoveEwDatabaseResponse = input => {
	const req = new messages.RemoveEwDatabaseResponse();
	req.setSuccessList(input.success);
	return req;
};
exports.resolveRequestTag = input => {
	const req = new messages.Tag();
	req.setIdList(input.id);
	req.setNameList(input.name);
	return req;
};
exports.resolveRequestSearchTagsRequest = input => {
	const req = new messages.SearchTagsRequest();
	req.setSongdatabaseidList(input.songDatabaseId);
	req.setVariationidList(input.variationId);
	req.setOffsetList(input.offset);
	req.setLimitList(input.limit);
	req.setSearchwordList(input.searchWord);
	return req;
};
exports.resolveRequestSearchTagsResponse = input => {
	const req = new messages.SearchTagsResponse();
	if (input.tags) {
		req.settagsList(
			input.fieldName.map(p => resolvers.resolveRequestTag(p))
		);
	}
	req.setMaxtagsList(input.maxTags);
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
	req.setNameList(input.name);
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
	req.setTagidList(input.tagId);
	req.setNameList(input.name);
	return req;
};
exports.resolveRequestUpdateTagResponse = input => {
	const req = new messages.UpdateTagResponse();
	if (input.tag) {
		req.setTag(resolvers.resolveRequestTag(input.tag));
	}
	req.setSuccessList(input.Success);
	return req;
};
exports.resolveRequestRemoveTagRequest = input => {
	const req = new messages.RemoveTagRequest();
	req.setTagidList(input.tagId);
	return req;
};
exports.resolveRequestRemoveTagResponse = input => {
	const req = new messages.RemoveTagResponse();
	req.setSuccessList(input.success);
	return req;
};
exports.resolveRequestLog = input => {
	const req = new messages.Log();
	req.setIdList(input.id);
	req.setLogtypeList(input.logType);
	req.setMessageList(input.message);
	req.setMessagedateList(input.messageDate);
	return req;
};
exports.resolveRequestSearchLogsRequest = input => {
	const req = new messages.SearchLogsRequest();
	req.setOffsetList(input.offset);
	req.setLimitList(input.limit);
	req.setMessagetypeList(input.messageType);
	req.setStartdateList(input.startDate);
	req.setEnddateList(input.endDate);
	req.setSearchwordList(input.searchWord);
	return req;
};
exports.resolveRequestSearchLogsResponse = input => {
	const req = new messages.SearchLogsResponse();
	if (input.logs) {
		req.setlogsList(
			input.fieldName.map(p => resolvers.resolveRequestLog(p))
		);
	}
	req.setMaxlogsList(input.maxLogs);
	return req;
};
exports.resolveRequestEwSong = input => {
	const req = new messages.EwSong();
	req.setIdList(input.id);
	req.setTitleList(input.title);
	req.setAuthorList(input.author);
	req.setCopyrightList(input.copyright);
	req.setAdministratorList(input.administrator);
	req.setDescriptionList(input.description);
	req.setTagsList(input.tags);
	req.setTextList(input.text);
	req.setVariationidList(input.variationId);
	return req;
};
exports.resolveRequestLanguage = input => {
	const req = new messages.Language();
	req.setIdList(input.id);
	req.setNameList(input.name);
	return req;
};
exports.resolveRequestSearchLanguagesRequest = input => {
	const req = new messages.SearchLanguagesRequest();
	req.setOffsetList(input.offset);
	req.setLimitList(input.limit);
	req.setSearchwordList(input.searchWord);
	return req;
};
exports.resolveRequestSearchLanguagesResponse = input => {
	const req = new messages.SearchLanguagesResponse();
	if (input.languages) {
		req.setlanguagesList(
			input.fieldName.map(p => resolvers.resolveRequestLanguage(p))
		);
	}
	req.setMaxlanguagesList(input.maxLanguages);
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
	req.setNameList(input.name);
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
	req.setLanguageidList(input.languageId);
	req.setNameList(input.name);
	return req;
};
exports.resolveRequestUpdateLanguageResponse = input => {
	const req = new messages.UpdateLanguageResponse();
	if (input.language) {
		req.setLanguage(resolvers.resolveRequestLanguage(input.language));
	}
	req.setSuccessList(input.success);
	return req;
};
exports.resolveRequestRemoveLanguageRequest = input => {
	const req = new messages.RemoveLanguageRequest();
	req.setLanguageidList(input.languageId);
	return req;
};
exports.resolveRequestRemoveLanguageResponse = input => {
	const req = new messages.RemoveLanguageResponse();
	req.setSuccessList(input.success);
	return req;
};
exports.resolveRequestSchedule = input => {
	const req = new messages.Schedule();
	req.setIdList(input.id);
	req.setNameList(input.name);
	req.setStartList(input.start);
	req.setEndList(input.end);
	return req;
};
exports.resolveRequestSearchSchedulesRequest = input => {
	const req = new messages.SearchSchedulesRequest();
	req.setOffsetList(input.offset);
	req.setLimitList(input.limit);
	return req;
};
exports.resolveRequestSearchSchedulesResponse = input => {
	const req = new messages.SearchSchedulesResponse();
	if (input.schedules) {
		req.setschedulesList(
			input.fieldName.map(p => resolvers.resolveRequestSchedule(p))
		);
	}
	req.setMaxschedulesList(input.maxSchedules);
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
	req.setNameList(input.name);
	req.setStartList(input.start);
	req.setEndList(input.end);
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
	req.setScheduleidList(input.scheduleId);
	req.setNameList(input.name);
	req.setAddsongidsList(input.addSongIds);
	req.setRemovesongidsList(input.removeSongIds);
	req.setChangeorderidsList(input.changeOrderIds);
	return req;
};
exports.resolveRequestUpdateScheduleResponse = input => {
	const req = new messages.UpdateScheduleResponse();
	if (input.schedule) {
		req.setSchedule(resolvers.resolveRequestSchedule(input.schedule));
	}
	req.setSuccessList(input.success);
	return req;
};
exports.resolveRequestRemoveScheduleRequest = input => {
	const req = new messages.RemoveScheduleRequest();
	req.setScheduleidList(input.scheduleId);
	return req;
};
exports.resolveRequestRemoveScheduleResponse = input => {
	const req = new messages.RemoveScheduleResponse();
	req.setSuccessList(input.success);
	return req;
};
exports.resolveRequestVariationVersion = input => {
	const req = new messages.VariationVersion();
	req.setIdList(input.id);
	req.setVariationidList(input.variationId);
	req.setNameList(input.name);
	req.setTextList(input.text);
	req.setVersionList(input.version);
	req.setCreatedatList(input.createdAt);
	req.setDisabledatList(input.disabledAt);
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
exports.resolveRequestAuthor = input => {
	const req = new messages.Author();
	req.setIdList(input.id);
	req.setNameList(input.name);
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
	req.setOffsetList(input.offset);
	req.setLimitList(input.limit);
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
	req.setNameList(input.name);
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
	req.setAuthoridList(input.authorId);
	req.setNameList(input.name);
	return req;
};
exports.resolveRequestUpdateAuthorResponse = input => {
	const req = new messages.UpdateAuthorResponse();
	if (input.author) {
		req.setAuthor(resolvers.resolveRequestAuthor(input.author));
	}
	req.setSuccessList(input.success);
	return req;
};
exports.resolveRequestRemoveAuthorRequest = input => {
	const req = new messages.RemoveAuthorRequest();
	req.setAuthoridList(input.authorId);
	return req;
};
exports.resolveRequestRemoveAuthorResponse = input => {
	const req = new messages.RemoveAuthorResponse();
	req.setSuccessList(input.success);
	return req;
};
exports.resolveRequestVariation = input => {
	const req = new messages.Variation();
	req.setIdList(input.id);
	req.setSongidList(input.songId);
	req.setLanguageidList(input.languageId);
	req.setAuthoridList(input.authorId);
	req.setCopyrightidList(input.copyrightId);
	return req;
};
exports.resolveRequestSearchVariationsRequest = input => {
	const req = new messages.SearchVariationsRequest();
	req.setSearchwordList(input.searchWord);
	req.setSongdatabaseidList(input.songDatabaseId);
	req.setSongdatabasefilteridList(input.songDatabaseFilterId);
	req.setTagidList(input.tagId);
	req.setLanguageidList(input.languageId);
	req.setOffsetList(input.offset);
	req.setLimitList(input.limit);
	req.setScheduleidList(input.scheduleId);
	req.setSkipvariationidsList(input.skipVariationIds);
	req.setOrderbyList(input.orderBy);
	req.setSearchfromList(input.searchFrom);
	return req;
};
exports.resolveRequestSearchVariationsResponse = input => {
	const req = new messages.SearchVariationsResponse();
	if (input.variations) {
		req.setvariationsList(
			input.fieldName.map(p => resolvers.resolveRequestVariation(p))
		);
	}
	req.setMaxvariationsList(input.maxVariations);
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
	req.setNameList(input.name);
	req.setTextList(input.text);
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
	req.setVariationidList(input.variationId);
	req.setNameList(input.name);
	req.setTextList(input.text);
	req.setSongidList(input.songId);
	req.setLanguageidList(input.languageId);
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
	req.setSuccessList(input.success);
	return req;
};
exports.resolveRequestRemoveVariationRequest = input => {
	const req = new messages.RemoveVariationRequest();
	req.setVariationidList(input.variationId);
	return req;
};
exports.resolveRequestRemoveVariationResponse = input => {
	const req = new messages.RemoveVariationResponse();
	req.setSuccessList(input.success);
	return req;
};
exports.resolveRequestCopyright = input => {
	const req = new messages.Copyright();
	req.setIdList(input.id);
	req.setNameList(input.name);
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
	req.setOffsetList(input.offset);
	req.setLimitList(input.limit);
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
	req.setNameList(input.name);
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
	req.setCopyrightidList(input.copyrightId);
	req.setNameList(input.name);
	return req;
};
exports.resolveRequestUpdateCopyrightResponse = input => {
	const req = new messages.UpdateCopyrightResponse();
	if (input.copyright) {
		req.setCopyright(resolvers.resolveRequestCopyright(input.copyright));
	}
	req.setSuccessList(input.success);
	return req;
};
exports.resolveRequestRemoveCopyrightRequest = input => {
	const req = new messages.RemoveCopyrightRequest();
	req.setCopyrightidList(input.copyrightId);
	return req;
};
exports.resolveRequestRemoveCopyrightResponse = input => {
	const req = new messages.RemoveCopyrightResponse();
	req.setSuccessList(input.success);
	return req;
};
exports.resolveRequestMatiasClient = input => {
	const req = new messages.MatiasClient();
	req.setIdList(input.id);
	req.setNameList(input.name);
	req.setHostnameList(input.hostName);
	req.setKeyList(input.key);
	req.setAcceptedList(input.accepted);
	req.setConnectedList(input.connected);
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
	req.setMaxmatiasclientsList(input.maxMatiasClients);
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
	req.setMatiasclientidList(input.matiasClientId);
	if (input.state) {
		req.setState(
			resolvers.resolveRequestMatiasClientAcceptedState(input.state)
		);
	}
	req.setNameList(input.name);
	return req;
};
exports.resolveRequestUpdateMatiasClientResponse = input => {
	const req = new messages.UpdateMatiasClientResponse();
	req.setSuccessList(input.success);
	if (input.matiasClient) {
		req.setMatiasclient(
			resolvers.resolveRequestMatiasClient(input.matiasClient)
		);
	}
	return req;
};
