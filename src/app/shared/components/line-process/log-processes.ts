type ProcessTypeColor = 'dark' | 'danger' | 'success' | 'primary' | 'info' | 'usual' | 'pickup' | 'secondary' | 'warning' | 'light' | 'adm' | 'dev' | 'dm' | 'tdm' | 'derby' | 'clothes';

export interface Process {
  translate: string;
  type: ProcessTypeColor;
  control: string;
}

const UnknownProcess: Process = {
  translate: 'Неизвестная команда',
  type: 'warning',
  control: 'UnknownProcess'
}
/* istambul ignore next */
const Processes = {
    '<connection/connect>': {
      translate: 'Соединение с сервером',
      type: 'dark',
      control: 'connect'
    },
    '<connection/deny/name_chars>': {
      translate: 'Недопустимые символы в нике',
      type: 'danger',
      control: 'connectDenyNameChars'
    },
    '<connection/deny/serial>': {
      translate: 'Блокировка входа по SS',
      type: 'danger',
      control: 'connectDenySerial'
    },
    '<connection/deny/name_length>': {
      translate: 'Недопустимое кол-во символов в нике',
      type: 'danger',
      control: 'connectDenyNameLength'
    },
    '<disconnect/time_out>': {
      translate: 'Выход с сервера после ожидания',
      type: 'dark',
      control: 'disconnectTimeout'
    },
    '<disconnect/leave>': {
      translate: 'Выход с сервера',
      type: 'dark',
      control: 'disconnect'
    },
    '<disconnect/kickban>': {
      translate: 'Кикбан',
      type: 'danger',
      control: 'disconnectKickBan'
    },
    '<disconnect/kick>': {
      translate: 'Кик',
      type: 'danger',
      control: 'disconnectKick'
    },
    '<disconnect/ban>': {
      translate: 'Бан',
      type: 'danger',
      control: 'disconnectBan'
    },
    '<auth/incorrect>': {
      translate: 'Неудачная аутентификация',
      type: 'danger',
      control: 'authIncorrect'
    },
    '<auth/correct/admin>': {
      translate: 'АДМИН: Успешная аутентификация',
      type: 'success',
      control: 'authCorrectAdm'
    },
    '<auth/correct/user>': {
      translate: 'ИГРОК: Успешная аутентификация',
      type: 'success',
      control: 'authCorrectUsr'
    },
    '<auth/correct/guest>': {
      translate: 'ГОСТЬ: Успешная аутентификация',
      type: 'success',
      control: 'authCorrectGue'
    },
    '<cmd/pre_process>': {
      translate: 'Препроцесс',
      type: 'primary',
      control: 'cmdPreproc'
    },
    '<cmd/pre_error/blocked>': {
      translate: 'Ошибка синтаксиса команды',
      type: 'danger',
      control: 'cmdPreerrBlock'
    },
    '<cmd/pre_error/syntax>': {
      translate: 'Ошибка синтаксиса команды',
      type: 'danger',
      control: 'cmdPreerrSynt'
    },
    '<cmd/pre_error/flood>': {
      translate: 'Флуд',
      type: 'danger',
      control: 'cmdPreerrFlood'
    },
    '<cmd/pre_error/not_found>': {
      translate: 'Команда не найдена',
      type: 'danger',
      control: 'cmdPreerrNotF'
    },
    '<cmd/pre_error/player>': {
      translate: 'Невозможно применить команду',
      type: 'danger',
      control: 'cmdPreerrPlayer'
    },
    '<cmd/pre_error/preload>': {
      translate: 'Ввод команды до загрузки',
      type: 'danger',
      control: 'cmdPreerrPre'
    },
    '<cmd/pre_error/not_in_game>': {
      translate: 'Ввод команды до входа',
      type: 'danger',
      control: 'cmdPreerrNotInGame'
    },
    '<cmd/pre_error/not_spawn>': {
      translate: 'Ввод команды до спавна',
      type: 'danger',
      control: 'cmdPreerrNotSpawn'
    },
    '<cmd/pre_error/value>': {
      translate: 'Команда содержит ошибку значения',
      type: 'danger',
      control: 'cmdPreerrVal'
    },
    '<cmd/pre_error/moving>': {
      translate: 'Запрет использования кмд в движении',
      type: 'danger',
      control: 'cmdPreerrMov'
    },
    '<cmd/success>': {
      translate: 'Успешное выполнение команды',
      type: 'success',
      control: 'cmdSuccess'
    },
    '<pause/start>': {
      translate: 'Вход в паузу',
      type: 'info',
      control: 'pauseStart'
    },
    '<pause/end>': {
      translate: 'Выход из паузы',
      type: 'info',
      control: 'pauseEnd'
    },
    '<weapon/buy>': {
      translate: 'Покупка оружия',
      type: 'usual',
      control: 'weapBuy'
    },
    '<weapon/pickup>': {
      translate: 'Подбор оружия',
      type: 'pickup',
      control: 'weapPick'
    },
    '<health/pickup>': {
      translate: 'Подбор здоровья',
      type: 'pickup',
      control: 'healthPick'
    },
    '<armour/pickup>': {
      translate: 'Подбор брони',
      type: 'pickup',
      control: 'armPick'
    },
    '<health/buy>': {
      translate: 'Покупка здоровья',
      type: 'usual',
      control: 'healthBuy'
    },
    '<armour/buy>': {
      translate: 'Покупка брони',
      type: 'usual',
      control: 'armBuy'
    },
    '<ammo/enter>': {
      translate: 'Вход в аммо',
      type: 'secondary',
      control: 'ammoEnt'
    },
    '<ammo/leave>': {
      translate: 'Выход из аммо',
      type: 'secondary',
      control: 'ammoLeav'
    },
    '<guard/block/on>': {
      translate: 'Блокировка',
      type: 'warning',
      control: 'guardBlockOn'
    },
    '<guard/block/off>': {
      translate: 'Отключение блокировки',
      type: 'warning',
      control: 'guardBlockOff'
    },
    '<rcon/login/true>': {
      translate: 'Успешный вход в RCON',
      type: 'success',
      control: 'rconLogTrue'
    },
    '<data/time_out/save>': {
      translate: 'Сохраниение данных',
      type: 'info',
      control: 'toBackupSave'
    },
    '<data/time_out/load>': {
      translate: 'Загрузка бэкапа данных',
      type: 'info',
      control: 'toBackupLoad'
    },
    '<chat/main>': {
      translate: 'Общий чат',
      type: 'light',
      control: 'chatMain'
    },
    '<chat/close>': {
      translate: 'Ближний чат',
      type: 'light',
      control: 'chatClose'
    },
    '<chat/team>': {
      translate: 'Командный чат',
      type: 'light',
      control: 'chatTeam'
    },
    '<chat/group>': {
      translate: 'Групповой чат',
      type: 'light',
      control: 'chatGroup'
    },
    '<chat/pm>': {
      translate: 'ЛС',
      type: 'light',
      control: 'chatPm'
    },
    '<chat/admin>': {
      translate: 'Админ чат',
      type: 'light',
      control: 'chatAdm'
    },
    '<chat/automute/dictionary>': {
      translate: 'Автомут по словарю',
      type: 'info',
      control: 'chatAutoDict'
    },
    '<mute/evasion/remove/hand>': {
      translate: 'Восстановление мута после выхода',
      type: 'info',
      control: 'chatAutoMuteEvasion'
    },
    '<chat/block/blocked>': {
      translate: 'Блокировка чата',
      type: 'warning',
      control: 'chatBlock'
    },
    '<chat/block/syntax>': {
      translate: 'Неверный синтаксис',
      type: 'warning',
      control: 'chatBlockSynt'
    },
    '<chat/block/muted>': {
      translate: 'Заглушен',
      type: 'warning',
      control: 'chatBlockMuted'
    },
    '<chat/block/flood>': {
      translate: 'Блокировка чата: флуд',
      type: 'warning',
      control: 'chatBlockFlood'
    },
    '<chat/block/not_in_game>': {
      translate: 'Блокировка чата: не в игре',
      type: 'warning',
      control: 'chatBlockNin'
    },
    '<chat/block/no_group>': {
      translate: 'Блокировка чата: не в группе',
      type: 'warning',
      control: 'chatBlockNinGr'
    },
    '<chat/block/repeated>': {
      translate: 'Блокировка чата: повторение',
      type: 'warning',
      control: 'chatBlockRep'
    },
    '<chat/block/domains>': {
      translate: 'Блокировка чата: ссылка',
      type: 'warning',
      control: 'chatBlockDomain'
    },
    '<chat/unmute/hand>': {
      translate: 'Ручная разблокировка чата',
      type: 'adm',
      control: 'chatHandUnBlock'
    },
    '<chat/mute/hand>': {
      translate: 'Ручная блокировка чата',
      type: 'info',
      control: 'chatHandBlock'
    },
    '<chat/mute/auto>': {
      translate: 'Автоматическая блокировка чата',
      type: 'info',
      control: 'chatAutoBlock'
    },
    '<chat/mute/cancel>': {
      translate: 'Отмена блокировки чата',
      type: 'info',
      control: 'chatCancelMute'
    },
    '<chat/unmute/auto>': {
      translate: 'Автоматическая разблокировка чата',
      type: 'info',
      control: 'chatAutoUnblock'
    },
    '<chat/report>': {
      translate: 'Жалоба на игрока',
      type: 'report',
      control: 'chatReport'
    },
    '<spectate/leave>': {
      translate: 'Выход из наблюдения',
      type: 'adm',
      control: 'spectateLeave'
    },
    '<spectate/enter>': {
      translate: 'Вход в наблюдение',
      type: 'adm',
      control: 'spectateEnter'
    },
    '<spectate/bug/spawn>': {
      translate: 'BUG:Респавн в наблюдении',
      type: 'adm',
      control: 'spectateBugSpawn'
    },
    '<check/explosion/player>': {
      translate: 'Проверка взрывом',
      type: 'adm',
      control: 'checkExpl'
    },
    '<check/explosion/vehicle>': {
      translate: 'Проверка взрывом транспорта',
      type: 'adm',
      control: 'checkExplVeh'
    },
    '<check/health/player>': {
      translate: 'Проверка GM',
      type: 'adm',
      control: 'checkHp'
    },
    '<check/health/vehicle>': {
      translate: 'Проверка GM транспорта',
      type: 'adm',
      control: 'checkHpVeh'
    },
    '<check/scroll/false>': {
      translate: 'Проверка автоскролла: FALSE',
      type: 'adm',
      control: 'checkScrollF'
    },
    '<check/scroll/true>': {
      translate: 'Проверка автоскролла: TRUE',
      type: 'adm',
      control: 'checkScrollT'
    },
    '<check/game_speed/player>': {
      translate: 'Проверка скорости игры PLR',
      type: 'adm',
      control: 'checkGmSpdPlr'
    },
    '<check/error/flood>': {
      translate: 'Слишком частая проверка',
      type: 'danger',
      control: 'checkErrFlood'
    },
    '<check/error/vehicle>': {
      translate: 'Проверка скорости игры в транспорте',
      type: 'danger',
      control: 'checkErrVeh'
    },
    '<check/error/paused>': {
      translate: 'Проверка скорости игры в паузе',
      type: 'danger',
      control: 'checkErrPaused'
    },
    '<spectate/change>': {
      translate: 'Смена цели наблюдения',
      type: 'adm',
      control: 'spectateChange'
    },
    '<dev/weapon>': {
      translate: 'DEV: Оружие',
      type: 'dev',
      control: 'devWeap'
    },
    '<dev/click_map>': {
      translate: 'DEV: Телепорт к точке',
      type: 'dev',
      control: 'devClickMap'
    },
    '<dev/vehicle/add>': {
      translate: 'DEV: Спавн транспорта',
      type: 'dev',
      control: 'devVeh'
    },
    '<dev/vehicle/remove>': {
      translate: 'DEV: Удаление транспорта',
      type: 'dev',
      control: 'devVehRm'
    },
    '<dev/keylog>': {
      translate: 'DEV: Захват кодов клавиш',
      type: 'dev',
      control: 'devKeylog'
    },
    '<pickup/artifact>': {
      translate: 'PICKUP: Артефакт',
      type: 'pickup',
      control: 'pickArt'
    },
    '<death/splat>': {
      translate: 'Смерть от падения',
      type: 'death',
      control: 'dthSplat'
    },
    '<death/drown>': {
      translate: 'Смерть от утопления',
      type: 'death',
      control: 'dthDrown'
    },
    '<death/killed>': {
      translate: 'Смерть от игрока',
      type: 'death',
      control: 'dthKilled'
    },
    '<death/suicide>': {
      translate: 'Суицид',
      type: 'death',
      control: 'dthSuicide'
    },
    '<death_match/leave>': {
      translate: 'Выход из DM',
      type: 'dm',
      control: 'dmLeave'
    },
    '<death_match/restore>': {
      translate: 'Восстановление DM',
      type: 'dm',
      control: 'dmRestore'
    },
    '<death_match/kick>': {
      translate: 'Кик с DM',
      type: 'dm',
      control: 'dmKick'
    },
    '<death_match/enter>': {
      translate: 'Вход в DM',
      type: 'dm',
      control: 'dmEnter'
    },
    '<death_match/create>': {
      translate: 'Создание DM',
      type: 'dm',
      control: 'dmCreate'
    },
    '<death_match/owner>': {
      translate: 'Владение DM',
      type: 'dm',
      control: 'dmOwn'
    },
    '<team_death_match/enter>': {
      translate: 'Вход в TDM',
      type: 'tdm',
      control: 'tdmEnter'
    },
    '<team_death_match/leave>': {
      translate: 'Выход из TDM',
      type: 'tdm',
      control: 'tdmLeave'
    },
    '<team_death_match/create>': {
      translate: 'Создание TDM',
      type: 'tdm',
      control: 'tdmCreate'
    },
    '<base_jump/create>': {
      translate: 'Создание бэйсджампа',
      type: 'derby',
      control: 'bjCreate'
    },
    '<base_jump/destroy>': {
      translate: 'Уничтожение бэйсджампа',
      type: 'derby',
      control: 'bjDestroy'
    },
    '<base_jump/leave>': {
      translate: 'Выход с бэйсджампа',
      type: 'derby',
      control: 'bjLeave'
    },
    '<base_jump/enter>': {
      translate: 'Вход в бэйсджамп',
      type: 'derby',
      control: 'bjEnter'
    },
    '<derby/create>': {
      translate: 'Создание дерби',
      type: 'derby',
      control: 'derbyCreate'
    },
    '<derby/destroy>': {
      translate: 'Уничтожение дерби',
      type: 'derby',
      control: 'derbyDestroy'
    },
    '<derby/leave>': {
      translate: 'Выход с дерби',
      type: 'derby',
      control: 'derbyLeave'
    },
    '<derby/enter>': {
      translate: 'Вход на дерби',
      type: 'derby',
      control: 'derbyEnter'
    },
    '<spectate/derby/bug/spawn>': {
      translate: 'BUG:Респавн в наблюдении за дерби',
      type: 'adm',
      control: 'spectateDerbyBugSpawn'
    },
    '<spectate/derby/enter>': {
      translate: 'Наблюдение за дерби',
      type: 'adm',
      control: 'spectateDerbyEnter'
    },
    '<spectate/derby/change>': {
      translate: 'Смена цели наблюдения на дерби',
      type: 'adm',
      control: 'spectateDerbyChange'
    },
    '<clothes_shop/enter>': {
      translate: 'Вход в Магазин одежды',
      type: 'clothes',
      control: 'clotEnter'
    },
    '<clothes_shop/leave>': {
      translate: 'Выход из Магазина одежды',
      type: 'clothes',
      control: 'clotLeave'
    },
    '<cn/request>': {
      translate: 'Запрос CN',
      type: 'info',
      control: 'сnReq'
    },
    '<cn/response/success>': {
      translate: 'CN RES',
      type: 'success',
      control: 'CnResSuccess'
    },
    '<cn/response/android>': {
      translate: 'CN не работает:Android',
      type: 'warning',
      control: 'сnResNotWorkForMobile'
    },
    '<cn/response/not_found>': {
      translate: 'CN не найден',
      type: 'danger',
      control: 'сnResNotFound'
    },
    '<unban/cn/auto>': {
      translate: 'Автоблокировка CN',
      type: 'info',
      control: 'unbanCnAuto'
    },
    '<ban/cn/hand>': {
      translate: 'Ручная блокировка CN',
      type: 'danger',
      control: 'banCnHand'
    },
    '<unban/cn/hand>': {
      translate: 'Ручная разблокировка CN',
      type: 'info',
      control: 'unbanCnHand'
    },
    '<warn/vehicle/repair>': {
      translate: 'ACHEAT WARN:VEHICLE_REPAIR',
      type: 'acheat',
      control: 'warnVehRepair'
    },
    '<warn/player/speed>': {
      translate: 'ACHEAT WARN: PLAYER_SPEED',
      type: 'acheat',
      control: 'warnPlayerSpd'
    },
    '<warn/player/silent_aim>': {
      translate: 'ACHEAT WARN: SILENT_AIM',
      type: 'acheat',
      control: 'warnPlayerSilentAim'
    },
    '<warn/player/teleport>': {
      translate: 'ACHEAT WARN: PLAYER_TELEPORT',
      type: 'acheat',
      control: 'warnPlayerTp'
    },
    '<warn/player/health>': {
      translate: 'ACHEAT WARN: PLAYER_HEALTH',
      type: 'acheat',
      control: 'warnPlayerHp'
    },
    '<warn/player/armour>': {
      translate: 'ACHEAT WARN: PLAYER_ARMOUR',
      type: 'acheat',
      control: 'warnPlayerArm'
    },
    '<warn/player/weapon>': {
      translate: 'ACHEAT WARN: PLAYER_WEAPON',
      type: 'acheat',
      control: 'warnPlayerWeap'
    },
    '<warn/player/ammo>': {
      translate: 'ACHEAT WARN: PLAYER_AMMO',
      type: 'acheat',
      control: 'warnPlayerAmmo'
    },
    '<warn/player/airbreak>': {
      translate: 'ACHEAT WARN: AIRBREAK',
      type: 'acheat',
      control: 'warnPlayerAirBk'
    },
    '<warn/player/speedhack>': {
      translate: 'ACHEAT WARN: SPEEDHACK',
      type: 'acheat',
      control: 'warnPlayerSh'
    },
    '<warn/player/unsync>': {
      translate: 'ACHEAT WARN: UNSYNC',
      type: 'acheat',
      control: 'warnPlayerUnSync'
    },
    '<warn/player/aimbot>': {
      translate: 'ACHEAT WARN: AIMBOT',
      type: 'acheat',
      control: 'warnPlayerAim'
    },
    '<warn/player/kill_flood>': {
      translate: 'Киллфлуд',
      type: 'warn',
      control: 'warnPlayerKilFld'
    },
    '<editor/click_map>': {
      translate: 'EDITOR: CLICKMAP',
      type: 'editor',
      control: 'editorClickmap'
    },
	'<editor/enter>': {
      translate: 'EDITOR: ENTER',
      type: 'editor',
      control: 'editorEnter'
    },
}

export const getProcessTranslation = (processname: keyof typeof Processes): Process => {
  if (!Processes[processname as string]) return UnknownProcess;
  return Processes[processname as string];
}

export default Processes;