package models

import "github.com/jinzhu/gorm"

type Game struct {
	gorm.Model
	HomeTeam      string `json:"hometeam"`
	AwayTeam      string `json:"awayteam"`
	HomeTeamScore int    `json:"hometeam_score"`
	AwayTeamScore int    `json:"awayteam_score"`
	CointosResult bool   `json:"cointos_result"`
	// HomeTeamPossession int
	// AwayTeamPossession int
	// HomePassingYards   int     `json:"home_passing_yards"`
	// HomeFirstDowns     int     `json:"home_first_downs"`
	// HomeTotalDrives    int     `json:"home_total_drives"`
	// HomePassAttempts   int     `json:"home_pass_attempts"`
	// HomeCompletepasses int     `json:"home_complete_passes"`
	// HomeIntThrown      int     `json:"home_int_thrown"`
	// HomeRushingYards   int     `json:"home_rushing_yards"`
	// HomeRushAttempts   int     `json:"home_rush_attempts"`
	// HomeTurnovers      int     `json:"home_turnovers"`
	Drives []Drive `gorm:"foreignKey:GameID"`
}

type Drive struct {
	gorm.Model
	GameID         int    `json:"game_id"`
	BallPossession string `json:"ball_possession"`
	AmountOfPlays  int    `json:"amount_of_play"`
	YardsDrived    int    `json:"yards_drived"`
	// PossessionTime int    `json:"possession_time"`
	DriveResult string `json:"drive_result"`
	// PointsGained   int    `json:"points_gained"`
	Plays []Play `gorm:"foreignKey:DriveID"`
}
type Play struct {
	gorm.Model
	DriveID             int    `json:"drive_id"`
	BallPossession      bool   `json:"ball_possession"`
	PossessionTeamName  string `json:"possession_team_name"`
	BallPlace           bool   `json:"ball_place"`
	BallOn              int    `json:"ball_on"`
	Down                int    `json:"down"`
	Distance            int    `json:"distance"`
	BallPlaceResult     bool   `json:"ball_place_result"`
	BallOnResult        int    `json:"ball_on_result"`
	DownResult          int    `json:"down_result"`
	DistanceResult      int    `json:"distance_result"`
	OffenseOrKick       bool   `json:"o_or_k"`
	PlayType            string `json:"play_type"`
	Passer              string `json:"passer"`
	Receiver            string `json:"receiver"`
	PassResult          string `json:"pass_result"`
	Carrier             string `json:"carrier"`
	Result              string `json:"result"`
	Tackler             string `json:"tackler"`
	ForceTurnOver       string `json:"force_turnover"`
	YardsGained         int    `json:"yards_gained"`
	Kicker              string `json:"kicker"`
	KickDistance        int    `json:"kick_distance"`
	Punter              string `json:"punter"`
	PuntDistance        int    `json:"punt_distance"`
	Returner            string `json:"returner"`
	KickIsGood          string `json:"kick_isgood"`
	KickResult          string `json:"kick_result"`
	ReturnYards         int    `json:"return_yards"`
	TurnoverPlace       bool   `json:"turnover_place"`
	TurnoverYards       int    `json:"turnover_yards"`
	TurnOverReturnYards int    `json:"turnover_return_yards"`
	YellowFlag          bool   `json:"yellow_flag"`
	Penalty             string `json:"penalty"`
	PlayTypeTFP         string `json:"play_type_tfp"`
	PasserTFP           string `json:"passer_tfp"`
	ReceiverTFP         string `json:"receiver_tfp"`
	CarrierTFP          string `json:"carrier_tfp"`
	KickerTFP           string `json:"kicker_tfp"`
	ResultTFP           string `json:"result_tfp"`
	ForceTurnOverTFP    string `json:"force_turnover_tfp"`
}

type TeamInfo struct {
	gorm.Model
	TeamName string `json:"team_name"`
	// Positions []Position
	OffensePositions []OffensePosition
	DefensePositions []DefensePosition
	KickingPositions []KickingPosition
}

type Position struct {
	gorm.Model
	TeamInfoID   uint   `json:"teaminfo_id"`
	PositionName string `json:"position_name"`
	Athletes     []Athlete
}

type Athlete struct {
	gorm.Model
	PositionID uint   `json:"position_id"`
	AthleteUrl string `json:"athlete_url"`
	FullName   string `json:"full_name"`
	Jersey     string `json:"jersey"`
}

type DefensePosition struct {
	gorm.Model
	TeamInfoID      uint   `json:"teaminfo_id"`
	PositionName    string `json:"position_name"`
	DefenseAthletes []DefenseAthlete
}

type KickingPosition struct {
	gorm.Model
	TeamInfoID      uint   `json:"teaminfo_id"`
	PositionName    string `json:"position_name"`
	KickingAthletes []KickingAthlete
}

type OffensePosition struct {
	gorm.Model
	TeamInfoID      uint   `json:"teaminfo_id"`
	PositionName    string `json:"position_name"`
	OffenseAthletes []OffenseAthlete
}

type DefenseAthlete struct {
	gorm.Model
	DefensePositionID uint   `json:"position_id"`
	AthleteUrl        string `json:"athlete_url"`
	FullName          string `json:"full_name"`
	Jersey            string `json:"jersey"`
}
type OffenseAthlete struct {
	gorm.Model
	OffensePositionID uint   `json:"position_id"`
	AthleteUrl        string `json:"athlete_url"`
	FullName          string `json:"full_name"`
	Jersey            string `json:"jersey"`
}
type KickingAthlete struct {
	gorm.Model
	KickingPositionID uint   `json:"position_id"`
	AthleteUrl        string `json:"athlete_url"`
	FullName          string `json:"full_name"`
	Jersey            string `json:"jersey"`
}
