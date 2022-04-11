/**
 * A transforms incoming device signal event to BQ schema event
 * @param {string} inJson
 * @return {string} outJson
 **/

function transformDeviceSignalEvent(inJson) {
  var original = JSON.parse(inJson)

  var transformed = {
    radioId: original.deviceId,
    eventTime: original.eventTime,
    reading: original.reading,
    consumptionFlag: original.consumptionFlag,
    reverseFlowFlag: original.reverseFlowFlag,
    noFlowFlag: original.noFlowFlag,
    emptyPipeFlag: original.emptyPipeFlag,
    temperature: original.temperature,
    pressure: original.pressure,
    batteryStatusFlag: original.batteryStatusFlag
  }

  return JSON.stringify(transformed)
}