const grpc = require("grpc");
const service = require("./_service_grpc_pb");
const messages = require("./_service_pb");
const resolvers = require("./resolvers");

exports.Client = class {
	constructor(args) {
		this.client = new service.Client(
			args.ip + ":" + args.port,
			grpc.credentials.createInsecure()
		);
	}
	fetchVariationById(args) {
		return new Promise((resolve, reject) => {
			const req = resolvers.resolveRequestFetchVariationByIdRequest(args);

			this.client.fetchVariationById(req, (err, res) => {
				if (err) {
					return reject(err);
				}
				return resolve(
					resolvers.resolveResponseFetchVariationByIdResponse(res)
				);
			});
		});
	}
	searchVariations(args) {
		return new Promise((resolve, reject) => {
			const req = resolvers.resolveRequestSearchVariationsRequest(args);

			this.client.searchVariations(req, (err, res) => {
				if (err) {
					return reject(err);
				}
				return resolve(
					resolvers.resolveResponseSearchVariationsResponse(res)
				);
			});
		});
	}
	fetchNewestVariationVersionByVariationId(args) {
		return new Promise((resolve, reject) => {
			const req = resolvers.resolveRequestFetchNewestVariationVersionByVariationIdRequest(
				args
			);

			this.client.fetchNewestVariationVersionByVariationId(
				req,
				(err, res) => {
					if (err) {
						return reject(err);
					}
					return resolve(
						resolvers.resolveResponseFetchNewestVariationVersionByVariationIdResponse(
							res
						)
					);
				}
			);
		});
	}
	fetchVariationVersionById(args) {
		return new Promise((resolve, reject) => {
			const req = resolvers.resolveRequestFetchVariationVersionByIdRequest(
				args
			);

			this.client.fetchVariationVersionById(req, (err, res) => {
				if (err) {
					return reject(err);
				}
				return resolve(
					resolvers.resolveResponseFetchVariationVersionByIdResponse(
						res
					)
				);
			});
		});
	}
	searchSongDatabases(args) {
		return new Promise((resolve, reject) => {
			const req = resolvers.resolveRequestSearchSongDatabasesRequest(
				args
			);

			this.client.searchSongDatabases(req, (err, res) => {
				if (err) {
					return reject(err);
				}
				return resolve(
					resolvers.resolveResponseSearchSongDatabasesResponse(res)
				);
			});
		});
	}
	fetchSongDatabaseById(args) {
		return new Promise((resolve, reject) => {
			const req = resolvers.resolveRequestFetchSongDatabaseByIdRequest(
				args
			);

			this.client.fetchSongDatabaseById(req, (err, res) => {
				if (err) {
					return reject(err);
				}
				return resolve(
					resolvers.resolveResponseFetchSongDatabaseByIdResponse(res)
				);
			});
		});
	}
	searchEwDatabases(args) {
		return new Promise((resolve, reject) => {
			const req = resolvers.resolveRequestSearchEwDatabasesRequest(args);

			this.client.searchEwDatabases(req, (err, res) => {
				if (err) {
					return reject(err);
				}
				return resolve(
					resolvers.resolveResponseSearchEwDatabasesResponse(res)
				);
			});
		});
	}
	fetchEwDatabaseById(args) {
		return new Promise((resolve, reject) => {
			const req = resolvers.resolveRequestFetchEwDatabaseByIdRequest(
				args
			);

			this.client.fetchEwDatabaseById(req, (err, res) => {
				if (err) {
					return reject(err);
				}
				return resolve(
					resolvers.resolveResponseFetchEwDatabaseByIdResponse(res)
				);
			});
		});
	}
	searchTags(args) {
		return new Promise((resolve, reject) => {
			const req = resolvers.resolveRequestSearchTagsRequest(args);

			this.client.searchTags(req, (err, res) => {
				if (err) {
					return reject(err);
				}
				return resolve(
					resolvers.resolveResponseSearchTagsResponse(res)
				);
			});
		});
	}
	fetchTagById(args) {
		return new Promise((resolve, reject) => {
			const req = resolvers.resolveRequestFetchTagByIdRequest(args);

			this.client.fetchTagById(req, (err, res) => {
				if (err) {
					return reject(err);
				}
				return resolve(
					resolvers.resolveResponseFetchTagByIdResponse(res)
				);
			});
		});
	}
	searchLanguages(args) {
		return new Promise((resolve, reject) => {
			const req = resolvers.resolveRequestSearchLanguagesRequest(args);

			this.client.searchLanguages(req, (err, res) => {
				if (err) {
					return reject(err);
				}
				return resolve(
					resolvers.resolveResponseSearchLanguagesResponse(res)
				);
			});
		});
	}
	fetchLanguageById(args) {
		return new Promise((resolve, reject) => {
			const req = resolvers.resolveRequestFetchLanguageByIdRequest(args);

			this.client.fetchLanguageById(req, (err, res) => {
				if (err) {
					return reject(err);
				}
				return resolve(
					resolvers.resolveResponseFetchLanguageByIdResponse(res)
				);
			});
		});
	}
	searchSchedules(args) {
		return new Promise((resolve, reject) => {
			const req = resolvers.resolveRequestSearchSchedulesRequest(args);

			this.client.searchSchedules(req, (err, res) => {
				if (err) {
					return reject(err);
				}
				return resolve(
					resolvers.resolveResponseSearchSchedulesResponse(res)
				);
			});
		});
	}
	fetchScheduleById(args) {
		return new Promise((resolve, reject) => {
			const req = resolvers.resolveRequestFetchScheduleByIdRequest(args);

			this.client.fetchScheduleById(req, (err, res) => {
				if (err) {
					return reject(err);
				}
				return resolve(
					resolvers.resolveResponseFetchScheduleByIdResponse(res)
				);
			});
		});
	}
	searchAuthors(args) {
		return new Promise((resolve, reject) => {
			const req = resolvers.resolveRequestSearchAuthorsRequest(args);

			this.client.searchAuthors(req, (err, res) => {
				if (err) {
					return reject(err);
				}
				return resolve(
					resolvers.resolveResponseSearchAuthorsResponse(res)
				);
			});
		});
	}
	fetchAuthorById(args) {
		return new Promise((resolve, reject) => {
			const req = resolvers.resolveRequestFetchAuthorByIdRequest(args);

			this.client.fetchAuthorById(req, (err, res) => {
				if (err) {
					return reject(err);
				}
				return resolve(
					resolvers.resolveResponseFetchAuthorByIdResponse(res)
				);
			});
		});
	}
	searchCopyrights(args) {
		return new Promise((resolve, reject) => {
			const req = resolvers.resolveRequestSearchCopyrightsRequest(args);

			this.client.searchCopyrights(req, (err, res) => {
				if (err) {
					return reject(err);
				}
				return resolve(
					resolvers.resolveResponseSearchCopyrightsResponse(res)
				);
			});
		});
	}
	fetchCopyrightById(args) {
		return new Promise((resolve, reject) => {
			const req = resolvers.resolveRequestFetchCopyrightByIdRequest(args);

			this.client.fetchCopyrightById(req, (err, res) => {
				if (err) {
					return reject(err);
				}
				return resolve(
					resolvers.resolveResponseFetchCopyrightByIdResponse(res)
				);
			});
		});
	}
	searchMatiasClients(args) {
		return new Promise((resolve, reject) => {
			const req = resolvers.resolveRequestSearchMatiasClientsRequest(
				args
			);

			this.client.searchMatiasClients(req, (err, res) => {
				if (err) {
					return reject(err);
				}
				return resolve(
					resolvers.resolveResponseSearchMatiasClientsResponse(res)
				);
			});
		});
	}
	fetchMatiasClient(args) {
		return new Promise((resolve, reject) => {
			const req = resolvers.resolveRequestFetchMatiasClientRequest(args);

			this.client.fetchMatiasClient(req, (err, res) => {
				if (err) {
					return reject(err);
				}
				return resolve(
					resolvers.resolveResponseFetchMatiasClientResponse(res)
				);
			});
		});
	}
	fetchMatiasClientEwDatabases(args) {
		return new Promise((resolve, reject) => {
			const req = resolvers.resolveRequestFetchMatiasClientEwDatabasesRequest(
				args
			);

			this.client.fetchMatiasClientEwDatabases(req, (err, res) => {
				if (err) {
					return reject(err);
				}
				return resolve(
					resolvers.resolveResponseFetchMatiasClientEwDatabasesResponse(
						res
					)
				);
			});
		});
	}
	searchLogs(args) {
		return new Promise((resolve, reject) => {
			const req = resolvers.resolveRequestSearchLogsRequest(args);

			this.client.searchLogs(req, (err, res) => {
				if (err) {
					return reject(err);
				}
				return resolve(
					resolvers.resolveResponseSearchLogsResponse(res)
				);
			});
		});
	}
	createVariation(args) {
		return new Promise((resolve, reject) => {
			const req = resolvers.resolveRequestCreateVariationRequest(args);

			this.client.createVariation(req, (err, res) => {
				if (err) {
					return reject(err);
				}
				return resolve(
					resolvers.resolveResponseCreateVariationResponse(res)
				);
			});
		});
	}
	updateVariation(args) {
		return new Promise((resolve, reject) => {
			const req = resolvers.resolveRequestUpdateVariationRequest(args);

			this.client.updateVariation(req, (err, res) => {
				if (err) {
					return reject(err);
				}
				return resolve(
					resolvers.resolveResponseUpdateVariationResponse(res)
				);
			});
		});
	}
	removeVariation(args) {
		return new Promise((resolve, reject) => {
			const req = resolvers.resolveRequestRemoveVariationRequest(args);

			this.client.removeVariation(req, (err, res) => {
				if (err) {
					return reject(err);
				}
				return resolve(
					resolvers.resolveResponseRemoveVariationResponse(res)
				);
			});
		});
	}
	createSongDatabase(args) {
		return new Promise((resolve, reject) => {
			const req = resolvers.resolveRequestCreateSongDatabaseRequest(args);

			this.client.createSongDatabase(req, (err, res) => {
				if (err) {
					return reject(err);
				}
				return resolve(
					resolvers.resolveResponseCreateSongDatabaseResponse(res)
				);
			});
		});
	}
	updateSongDatabase(args) {
		return new Promise((resolve, reject) => {
			const req = resolvers.resolveRequestUpdateSongDatabaseRequest(args);

			this.client.updateSongDatabase(req, (err, res) => {
				if (err) {
					return reject(err);
				}
				return resolve(
					resolvers.resolveResponseUpdateSongDatabaseResponse(res)
				);
			});
		});
	}
	removeSongDatabase(args) {
		return new Promise((resolve, reject) => {
			const req = resolvers.resolveRequestRemoveSongDatabaseRequest(args);

			this.client.removeSongDatabase(req, (err, res) => {
				if (err) {
					return reject(err);
				}
				return resolve(
					resolvers.resolveResponseRemoveSongDatabaseResponse(res)
				);
			});
		});
	}
	createEwDatabase(args) {
		return new Promise((resolve, reject) => {
			const req = resolvers.resolveRequestCreateEwDatabaseRequest(args);

			this.client.createEwDatabase(req, (err, res) => {
				if (err) {
					return reject(err);
				}
				return resolve(
					resolvers.resolveResponseCreateEwDatabaseResponse(res)
				);
			});
		});
	}
	updateEwDatabase(args) {
		return new Promise((resolve, reject) => {
			const req = resolvers.resolveRequestUpdateEwDatabaseRequest(args);

			this.client.updateEwDatabase(req, (err, res) => {
				if (err) {
					return reject(err);
				}
				return resolve(
					resolvers.resolveResponseUpdateEwDatabaseResponse(res)
				);
			});
		});
	}
	removeEwDatabase(args) {
		return new Promise((resolve, reject) => {
			const req = resolvers.resolveRequestRemoveEwDatabaseRequest(args);

			this.client.removeEwDatabase(req, (err, res) => {
				if (err) {
					return reject(err);
				}
				return resolve(
					resolvers.resolveResponseRemoveEwDatabaseResponse(res)
				);
			});
		});
	}
	createTag(args) {
		return new Promise((resolve, reject) => {
			const req = resolvers.resolveRequestCreateTagRequest(args);

			this.client.createTag(req, (err, res) => {
				if (err) {
					return reject(err);
				}
				return resolve(resolvers.resolveResponseCreateTagResponse(res));
			});
		});
	}
	updateTag(args) {
		return new Promise((resolve, reject) => {
			const req = resolvers.resolveRequestUpdateTagRequest(args);

			this.client.updateTag(req, (err, res) => {
				if (err) {
					return reject(err);
				}
				return resolve(resolvers.resolveResponseUpdateTagResponse(res));
			});
		});
	}
	removeTag(args) {
		return new Promise((resolve, reject) => {
			const req = resolvers.resolveRequestRemoveTagRequest(args);

			this.client.removeTag(req, (err, res) => {
				if (err) {
					return reject(err);
				}
				return resolve(resolvers.resolveResponseRemoveTagResponse(res));
			});
		});
	}
	createLanguage(args) {
		return new Promise((resolve, reject) => {
			const req = resolvers.resolveRequestCreateLanguageRequest(args);

			this.client.createLanguage(req, (err, res) => {
				if (err) {
					return reject(err);
				}
				return resolve(
					resolvers.resolveResponseCreateLanguageResponse(res)
				);
			});
		});
	}
	updateLanguage(args) {
		return new Promise((resolve, reject) => {
			const req = resolvers.resolveRequestUpdateLanguageRequest(args);

			this.client.updateLanguage(req, (err, res) => {
				if (err) {
					return reject(err);
				}
				return resolve(
					resolvers.resolveResponseUpdateLanguageResponse(res)
				);
			});
		});
	}
	removeLanguage(args) {
		return new Promise((resolve, reject) => {
			const req = resolvers.resolveRequestRemoveLanguageRequest(args);

			this.client.removeLanguage(req, (err, res) => {
				if (err) {
					return reject(err);
				}
				return resolve(
					resolvers.resolveResponseRemoveLanguageResponse(res)
				);
			});
		});
	}
	createSchedule(args) {
		return new Promise((resolve, reject) => {
			const req = resolvers.resolveRequestCreateScheduleRequest(args);

			this.client.createSchedule(req, (err, res) => {
				if (err) {
					return reject(err);
				}
				return resolve(
					resolvers.resolveResponseCreateScheduleResponse(res)
				);
			});
		});
	}
	updateSchedule(args) {
		return new Promise((resolve, reject) => {
			const req = resolvers.resolveRequestUpdateScheduleRequest(args);

			this.client.updateSchedule(req, (err, res) => {
				if (err) {
					return reject(err);
				}
				return resolve(
					resolvers.resolveResponseUpdateScheduleResponse(res)
				);
			});
		});
	}
	removeSchedule(args) {
		return new Promise((resolve, reject) => {
			const req = resolvers.resolveRequestRemoveScheduleRequest(args);

			this.client.removeSchedule(req, (err, res) => {
				if (err) {
					return reject(err);
				}
				return resolve(
					resolvers.resolveResponseRemoveScheduleResponse(res)
				);
			});
		});
	}
	createAuthor(args) {
		return new Promise((resolve, reject) => {
			const req = resolvers.resolveRequestCreateAuthorRequest(args);

			this.client.createAuthor(req, (err, res) => {
				if (err) {
					return reject(err);
				}
				return resolve(
					resolvers.resolveResponseCreateAuthorResponse(res)
				);
			});
		});
	}
	updateAuthor(args) {
		return new Promise((resolve, reject) => {
			const req = resolvers.resolveRequestUpdateAuthorRequest(args);

			this.client.updateAuthor(req, (err, res) => {
				if (err) {
					return reject(err);
				}
				return resolve(
					resolvers.resolveResponseUpdateAuthorResponse(res)
				);
			});
		});
	}
	removeAuthor(args) {
		return new Promise((resolve, reject) => {
			const req = resolvers.resolveRequestRemoveAuthorRequest(args);

			this.client.removeAuthor(req, (err, res) => {
				if (err) {
					return reject(err);
				}
				return resolve(
					resolvers.resolveResponseRemoveAuthorResponse(res)
				);
			});
		});
	}
	createCopyright(args) {
		return new Promise((resolve, reject) => {
			const req = resolvers.resolveRequestCreateCopyrightRequest(args);

			this.client.createCopyright(req, (err, res) => {
				if (err) {
					return reject(err);
				}
				return resolve(
					resolvers.resolveResponseCreateCopyrightResponse(res)
				);
			});
		});
	}
	updateCopyright(args) {
		return new Promise((resolve, reject) => {
			const req = resolvers.resolveRequestUpdateCopyrightRequest(args);

			this.client.updateCopyright(req, (err, res) => {
				if (err) {
					return reject(err);
				}
				return resolve(
					resolvers.resolveResponseUpdateCopyrightResponse(res)
				);
			});
		});
	}
	removeCopyright(args) {
		return new Promise((resolve, reject) => {
			const req = resolvers.resolveRequestRemoveCopyrightRequest(args);

			this.client.removeCopyright(req, (err, res) => {
				if (err) {
					return reject(err);
				}
				return resolve(
					resolvers.resolveResponseRemoveCopyrightResponse(res)
				);
			});
		});
	}
	updateMatiasClient(args) {
		return new Promise((resolve, reject) => {
			const req = resolvers.resolveRequestUpdateMatiasClientRequest(args);

			this.client.updateMatiasClient(req, (err, res) => {
				if (err) {
					return reject(err);
				}
				return resolve(
					resolvers.resolveResponseUpdateMatiasClientResponse(res)
				);
			});
		});
	}
};
