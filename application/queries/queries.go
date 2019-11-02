package queries

type UserRepository interface {
	Count() (int, error)
}

type TrackStore interface {
	GetStats() (StoreStats, error)
}

type ThumbnailStore interface {
	GetStats() (StoreStats, error)
}

type Stats struct {
	Users      int        `json:"users"`
	Thumbnails StoreStats `json:"thumbnails"`
	Tracks     StoreStats `json:"tracks"`
}

type StoreStats struct {
	AllItems       int `json:"allItems"`
	ConvertedItems int `json:"convertedItems"`
}
