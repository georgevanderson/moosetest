import { Key } from "@514labs/moose-lib";

export interface MooseSessionTelemetry {
  timestamp: Key<Date>;
  machineId: string;
  sequenceId: string;
  project: string;
  cliVersion: string;
  sessionDurationInSec: number;
  isProd: boolean;
  isMooseDeveloper: boolean;
  ingestedEventsCount: number;
  ingestedEventsTotalBytes: number;
  ingestAvgLatencyInMs: number;
  consumedRequestCount: number;
  consumedAvgLatencyInMs: number;
  blocksCount: number;
  streamingToOLAPEventSyncedCount: number;
  streamingToOLAPEventSyncedBytesCount: number;
  streamingFunctionsInputEventsProcessedCount: number;
  streamingFunctionsOutputEventsProcessedCount: number;
  streamingFunctionsEventsProcessedTotalBytes: number;
  customerId: string;
}