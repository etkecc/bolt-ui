// Code generated by Wire. DO NOT EDIT.

//go:generate go run github.com/google/wire/cmd/wire
//+build !wireinject

package wire

import (
	"github.com/boreq/velo/adapters"
	auth2 "github.com/boreq/velo/adapters/auth"
	tracker2 "github.com/boreq/velo/adapters/tracker"
	"github.com/boreq/velo/application"
	"github.com/boreq/velo/application/auth"
	"github.com/boreq/velo/application/tracker"
	"github.com/boreq/velo/internal/config"
	"github.com/boreq/velo/internal/service"
	"github.com/boreq/velo/internal/tests/mocks"
	"github.com/boreq/velo/ports/http"
	"go.etcd.io/bbolt"
)

// Injectors from wire.go:

func BuildTransactableAuthRepositories(tx *bbolt.Tx) (*auth.TransactableRepositories, error) {
	invitationRepository, err := auth2.NewInvitationRepository(tx)
	if err != nil {
		return nil, err
	}
	uuidToUsernameRepository, err := auth2.NewUUIDToUsernameRepository(tx)
	if err != nil {
		return nil, err
	}
	userRepository, err := auth2.NewUserRepository(tx, uuidToUsernameRepository)
	if err != nil {
		return nil, err
	}
	transactableRepositories := &auth.TransactableRepositories{
		Invitations: invitationRepository,
		Users:       userRepository,
	}
	return transactableRepositories, nil
}

func BuildTransactableTrackerRepositories(tx *bbolt.Tx) (*tracker.TransactableRepositories, error) {
	routeRepository, err := tracker2.NewRouteRepository(tx)
	if err != nil {
		return nil, err
	}
	activityRepository, err := tracker2.NewActivityRepository(tx)
	if err != nil {
		return nil, err
	}
	privacyZoneRepository, err := tracker2.NewPrivacyZoneRepository(tx)
	if err != nil {
		return nil, err
	}
	userToActivityRepository, err := tracker2.NewUserToActivityRepository(tx, activityRepository)
	if err != nil {
		return nil, err
	}
	userToPrivacyZoneRepository, err := tracker2.NewUserToPrivacyZoneRepository(tx, privacyZoneRepository)
	if err != nil {
		return nil, err
	}
	uuidToUsernameRepository, err := auth2.NewUUIDToUsernameRepository(tx)
	if err != nil {
		return nil, err
	}
	userRepository, err := auth2.NewUserRepository(tx, uuidToUsernameRepository)
	if err != nil {
		return nil, err
	}
	transactableRepositories := &tracker.TransactableRepositories{
		Route:             routeRepository,
		Activity:          activityRepository,
		PrivacyZone:       privacyZoneRepository,
		UserToActivity:    userToActivityRepository,
		UserToPrivacyZone: userToPrivacyZoneRepository,
		User:              userRepository,
	}
	return transactableRepositories, nil
}

func BuildTestTransactableTrackerRepositories(tx *bbolt.Tx, trackerMocks TrackerMocks) (*tracker.TransactableRepositories, error) {
	routeRepository, err := tracker2.NewRouteRepository(tx)
	if err != nil {
		return nil, err
	}
	activityRepository, err := tracker2.NewActivityRepository(tx)
	if err != nil {
		return nil, err
	}
	privacyZoneRepository, err := tracker2.NewPrivacyZoneRepository(tx)
	if err != nil {
		return nil, err
	}
	userToActivityRepository, err := tracker2.NewUserToActivityRepository(tx, activityRepository)
	if err != nil {
		return nil, err
	}
	userToPrivacyZoneRepository, err := tracker2.NewUserToPrivacyZoneRepository(tx, privacyZoneRepository)
	if err != nil {
		return nil, err
	}
	trackerUserRepositoryMock := trackerMocks.UserRepository
	transactableRepositories := &tracker.TransactableRepositories{
		Route:             routeRepository,
		Activity:          activityRepository,
		PrivacyZone:       privacyZoneRepository,
		UserToActivity:    userToActivityRepository,
		UserToPrivacyZone: userToPrivacyZoneRepository,
		User:              trackerUserRepositoryMock,
	}
	return transactableRepositories, nil
}

func BuildTrackerForTest(db *bbolt.DB) (TestTracker, error) {
	trackerUserRepositoryMock := mocks.NewTrackerUserRepositoryMock()
	trackerMocks := TrackerMocks{
		UserRepository: trackerUserRepositoryMock,
	}
	wireTrackerTestRepositoriesProvider := newTrackerTestRepositoriesProvider(trackerMocks)
	trackerTransactionProvider := tracker2.NewTrackerTransactionProvider(db, wireTrackerTestRepositoriesProvider)
	routeFileParser := tracker2.NewRouteFileParser()
	uuidGenerator := adapters.NewUUIDGenerator()
	addActivityHandler := tracker.NewAddActivityHandler(trackerTransactionProvider, routeFileParser, uuidGenerator)
	getActivityHandler := tracker.NewGetActivityHandler(trackerTransactionProvider)
	editActivityHandler := tracker.NewEditActivityHandler(trackerTransactionProvider)
	deleteActivityHandler := tracker.NewDeleteActivityHandler(trackerTransactionProvider)
	listUserActivitiesHandler := tracker.NewListUserActivitiesHandler(trackerTransactionProvider)
	addPrivacyZoneHandler := tracker.NewAddPrivacyZoneHandler(trackerTransactionProvider, routeFileParser, uuidGenerator)
	getPrivacyZoneHandler := tracker.NewGetPrivacyZoneHandler(trackerTransactionProvider)
	listUserPrivacyZonesHandler := tracker.NewListUserPrivacyZonesHandler(trackerTransactionProvider)
	trackerTracker := &tracker.Tracker{
		AddActivity:          addActivityHandler,
		GetActivity:          getActivityHandler,
		EditActivity:         editActivityHandler,
		DeleteActivity:       deleteActivityHandler,
		ListUserActivities:   listUserActivitiesHandler,
		AddPrivacyZone:       addPrivacyZoneHandler,
		GetPrivacyZone:       getPrivacyZoneHandler,
		ListUserPrivacyZones: listUserPrivacyZonesHandler,
	}
	testTracker := TestTracker{
		Tracker:      trackerTracker,
		TrackerMocks: trackerMocks,
	}
	return testTracker, nil
}

func BuildAuthForTest(db *bbolt.DB) (*auth.Auth, error) {
	bcryptPasswordHasher := auth2.NewBcryptPasswordHasher()
	wireAuthRepositoriesProvider := newAuthRepositoriesProvider()
	authTransactionProvider := auth2.NewAuthTransactionProvider(db, wireAuthRepositoriesProvider)
	uuidGenerator := adapters.NewUUIDGenerator()
	registerInitialHandler := auth.NewRegisterInitialHandler(bcryptPasswordHasher, authTransactionProvider, uuidGenerator)
	registerHandler := auth.NewRegisterHandler(bcryptPasswordHasher, authTransactionProvider, uuidGenerator)
	cryptoAccessTokenGenerator := auth2.NewCryptoAccessTokenGenerator()
	loginHandler := auth.NewLoginHandler(bcryptPasswordHasher, authTransactionProvider, cryptoAccessTokenGenerator)
	logoutHandler := auth.NewLogoutHandler(authTransactionProvider, cryptoAccessTokenGenerator)
	checkAccessTokenHandler := auth.NewCheckAccessTokenHandler(authTransactionProvider, cryptoAccessTokenGenerator)
	listHandler := auth.NewListHandler(authTransactionProvider)
	cryptoStringGenerator := auth2.NewCryptoStringGenerator()
	createInvitationHandler := auth.NewCreateInvitationHandler(cryptoStringGenerator, authTransactionProvider)
	removeHandler := auth.NewRemoveHandler(authTransactionProvider)
	setPasswordHandler := auth.NewSetPasswordHandler(bcryptPasswordHasher, authTransactionProvider)
	getUserHandler := auth.NewGetUserHandler(authTransactionProvider)
	authAuth := &auth.Auth{
		RegisterInitial:  registerInitialHandler,
		Register:         registerHandler,
		Login:            loginHandler,
		Logout:           logoutHandler,
		CheckAccessToken: checkAccessTokenHandler,
		List:             listHandler,
		CreateInvitation: createInvitationHandler,
		Remove:           removeHandler,
		SetPassword:      setPasswordHandler,
		GetUser:          getUserHandler,
	}
	return authAuth, nil
}

func BuildAuth(conf *config.Config) (*auth.Auth, error) {
	bcryptPasswordHasher := auth2.NewBcryptPasswordHasher()
	db, err := newBolt(conf)
	if err != nil {
		return nil, err
	}
	wireAuthRepositoriesProvider := newAuthRepositoriesProvider()
	authTransactionProvider := auth2.NewAuthTransactionProvider(db, wireAuthRepositoriesProvider)
	uuidGenerator := adapters.NewUUIDGenerator()
	registerInitialHandler := auth.NewRegisterInitialHandler(bcryptPasswordHasher, authTransactionProvider, uuidGenerator)
	registerHandler := auth.NewRegisterHandler(bcryptPasswordHasher, authTransactionProvider, uuidGenerator)
	cryptoAccessTokenGenerator := auth2.NewCryptoAccessTokenGenerator()
	loginHandler := auth.NewLoginHandler(bcryptPasswordHasher, authTransactionProvider, cryptoAccessTokenGenerator)
	logoutHandler := auth.NewLogoutHandler(authTransactionProvider, cryptoAccessTokenGenerator)
	checkAccessTokenHandler := auth.NewCheckAccessTokenHandler(authTransactionProvider, cryptoAccessTokenGenerator)
	listHandler := auth.NewListHandler(authTransactionProvider)
	cryptoStringGenerator := auth2.NewCryptoStringGenerator()
	createInvitationHandler := auth.NewCreateInvitationHandler(cryptoStringGenerator, authTransactionProvider)
	removeHandler := auth.NewRemoveHandler(authTransactionProvider)
	setPasswordHandler := auth.NewSetPasswordHandler(bcryptPasswordHasher, authTransactionProvider)
	getUserHandler := auth.NewGetUserHandler(authTransactionProvider)
	authAuth := &auth.Auth{
		RegisterInitial:  registerInitialHandler,
		Register:         registerHandler,
		Login:            loginHandler,
		Logout:           logoutHandler,
		CheckAccessToken: checkAccessTokenHandler,
		List:             listHandler,
		CreateInvitation: createInvitationHandler,
		Remove:           removeHandler,
		SetPassword:      setPasswordHandler,
		GetUser:          getUserHandler,
	}
	return authAuth, nil
}

func BuildService(conf *config.Config) (*service.Service, error) {
	bcryptPasswordHasher := auth2.NewBcryptPasswordHasher()
	db, err := newBolt(conf)
	if err != nil {
		return nil, err
	}
	wireAuthRepositoriesProvider := newAuthRepositoriesProvider()
	authTransactionProvider := auth2.NewAuthTransactionProvider(db, wireAuthRepositoriesProvider)
	uuidGenerator := adapters.NewUUIDGenerator()
	registerInitialHandler := auth.NewRegisterInitialHandler(bcryptPasswordHasher, authTransactionProvider, uuidGenerator)
	registerHandler := auth.NewRegisterHandler(bcryptPasswordHasher, authTransactionProvider, uuidGenerator)
	cryptoAccessTokenGenerator := auth2.NewCryptoAccessTokenGenerator()
	loginHandler := auth.NewLoginHandler(bcryptPasswordHasher, authTransactionProvider, cryptoAccessTokenGenerator)
	logoutHandler := auth.NewLogoutHandler(authTransactionProvider, cryptoAccessTokenGenerator)
	checkAccessTokenHandler := auth.NewCheckAccessTokenHandler(authTransactionProvider, cryptoAccessTokenGenerator)
	listHandler := auth.NewListHandler(authTransactionProvider)
	cryptoStringGenerator := auth2.NewCryptoStringGenerator()
	createInvitationHandler := auth.NewCreateInvitationHandler(cryptoStringGenerator, authTransactionProvider)
	removeHandler := auth.NewRemoveHandler(authTransactionProvider)
	setPasswordHandler := auth.NewSetPasswordHandler(bcryptPasswordHasher, authTransactionProvider)
	getUserHandler := auth.NewGetUserHandler(authTransactionProvider)
	authAuth := auth.Auth{
		RegisterInitial:  registerInitialHandler,
		Register:         registerHandler,
		Login:            loginHandler,
		Logout:           logoutHandler,
		CheckAccessToken: checkAccessTokenHandler,
		List:             listHandler,
		CreateInvitation: createInvitationHandler,
		Remove:           removeHandler,
		SetPassword:      setPasswordHandler,
		GetUser:          getUserHandler,
	}
	wireTrackerRepositoriesProvider := newTrackerRepositoriesProvider()
	trackerTransactionProvider := tracker2.NewTrackerTransactionProvider(db, wireTrackerRepositoriesProvider)
	routeFileParser := tracker2.NewRouteFileParser()
	addActivityHandler := tracker.NewAddActivityHandler(trackerTransactionProvider, routeFileParser, uuidGenerator)
	getActivityHandler := tracker.NewGetActivityHandler(trackerTransactionProvider)
	editActivityHandler := tracker.NewEditActivityHandler(trackerTransactionProvider)
	deleteActivityHandler := tracker.NewDeleteActivityHandler(trackerTransactionProvider)
	listUserActivitiesHandler := tracker.NewListUserActivitiesHandler(trackerTransactionProvider)
	addPrivacyZoneHandler := tracker.NewAddPrivacyZoneHandler(trackerTransactionProvider, routeFileParser, uuidGenerator)
	getPrivacyZoneHandler := tracker.NewGetPrivacyZoneHandler(trackerTransactionProvider)
	listUserPrivacyZonesHandler := tracker.NewListUserPrivacyZonesHandler(trackerTransactionProvider)
	trackerTracker := tracker.Tracker{
		AddActivity:          addActivityHandler,
		GetActivity:          getActivityHandler,
		EditActivity:         editActivityHandler,
		DeleteActivity:       deleteActivityHandler,
		ListUserActivities:   listUserActivitiesHandler,
		AddPrivacyZone:       addPrivacyZoneHandler,
		GetPrivacyZone:       getPrivacyZoneHandler,
		ListUserPrivacyZones: listUserPrivacyZonesHandler,
	}
	applicationApplication := &application.Application{
		Auth:    authAuth,
		Tracker: trackerTracker,
	}
	httpAuthProvider := http.NewHttpAuthProvider(applicationApplication)
	handler, err := http.NewHandler(applicationApplication, httpAuthProvider)
	if err != nil {
		return nil, err
	}
	server := http.NewServer(handler)
	serviceService := service.NewService(server)
	return serviceService, nil
}

// wire.go:

type TestTracker struct {
	Tracker *tracker.Tracker
	TrackerMocks
}

type TrackerMocks struct {
	UserRepository *mocks.TrackerUserRepositoryMock
}
