'use strict';Object.defineProperty(exports,'__esModule',{value:true});const PRESET_INIT=exports.PRESET_INIT='preset/init';const SOCKET_CONNECT_TO_REMOTE=exports.SOCKET_CONNECT_TO_REMOTE='socket/connect/to/remote';const PROCESSING_FAILED=exports.PROCESSING_FAILED='processing/failed';class IPreset{onNotified(){return false}beforeOut({buffer}){return buffer}beforeIn({buffer}){return buffer}clientOut({buffer}){return buffer}serverIn({buffer}){return buffer}serverOut({buffer}){return buffer}clientIn({buffer}){return buffer}}exports.IPreset=IPreset;