

export type Play = {
    drive_id:number
	ball_possession:boolean
    possession_team_name:string
	ball_place:boolean
	ball_on:number
	down:number
	distance:number
	ball_place_result:boolean
	ball_on_result:number
	down_result:number
	distance_result:number
	o_or_k:boolean
	play_type:string
	passer:string
	receiver:string
	pass_result:string
	carrier:string
	result:string
	tackler:string
    force_turnover:string
	yards_gained:number
	kicker:string
	kick_distance:number
	punter:string
	punt_distance:number
	returner:string
	kick_isgood:boolean
	kick_result:string
	return_yards:number
	turnover_place:boolean
	turnover_yards:number
	turnover_return_yards:number
    yellow_flag:boolean
    penalty:string
    play_type_tfp :string  
    passer_tfp  :string
    receiver_tfp   :string 
    carrier_tfp :string
    kicker_tfp  :string
    result_tfp  :string
    force_turnover_tfp:string
}

export type Drive = {
    game_id         :number   
	ball_possession :string
	amount_of_play  :number   
	yards_drived    :number   
	possession_time :number  
	drive_result    :string 
	points_gained   :number   
    Play :Play[]
}

export type TeamInfo = {
	id           :number
    CreatedAt:  string
    DeletedAt: string | null
    ID: number
    OffensePositions: OffensePosition[]
    DefensePositions: DefensePosition[]
    KickingPositions: KickingPosition[]
    UpdatedAt: string
    team_name: string
}

export type OffensePosition = {
	id           :number
    teaminfo_id     :number
	position_name   :string 
	OffenseAthletes    :OffenseAthlete[]
}
export type DefensePosition = {
	id             :number
    teaminfo_id     :number
	position_name    :string 
	DefenseAthletes :DefenseAthlete[]
}
export type KickingPosition = {
	id           :number
    teaminfo_id     :number
	position_name    :string 
	KickingAthletes       :KickingAthlete[]
}

export type OffenseAthlete = {
	id           :number
    position_id  :number 
	athlete_url  :string 
	full_name    :string 
	jersey      :string 
}
export type DefenseAthlete = {
	id           :number
    position_id  :number 
	athlete_url  :string 
	full_name    :string 
	jersey      :string 
}
export type KickingAthlete = {
	id           :number
    position_id  :number 
	athlete_url  :string 
	full_name    :string 
	jersey      :string 
}

export type Game = {
	id           :number
	hometeam:string
	awayteam:string 
	hometeam_score:number
    awayteam_score:number
	cointos_result:boolean
	// HomeTeamPossession int
	// AwayTeamPossession int
	// home_passing_yards: number
	// home_first_downs: number
	// home_total_drives: number
	// home_pass_attempts: number
	// home_complete_passes: number
	// home_int_thrown: number
	// home_rushing_yards: number
	// home_rushing_attempts: number
	// home_turnovers: number
	Drives:Drive[] 
}

export type GameTeams = {
    hometeam:string
	awayteam:string 
}

export{}