import { DataModelConfig, IngestionFormat } from "@514labs/moose-lib";

export const LogsConfig: DataModelConfig<Logs> = {
  ingestion: {
    format: IngestionFormat.JSON,
  },
  storage: {
    enabled: true,
    order_by_fields: ["resourceLogs"],
  },
};

export interface Logs {
  resourceLogs: {
    resource: {
      attributes: {
        key: string;
        value: {
          stringValue: string;
        };
      }[];
      droppedAttributesCount: number;
    };
    scopeLogs: {
      scope: {
        name: string;
        version: string;
        attributes: {
          key: string;
          value: {
            stringValue: string;
          };
        }[];
        droppedAttributesCount: number;
      };
      logRecords: {
        timeUnixNano: string;
        observedTimeUnixNano: string;
        severityNumber: number;
        severityText: string;
        body: {
          value: {
            stringValue: string;
          };
        };
        attributes: {
          key: string;
          value: {
            stringValue: string;
          };
        }[];
        droppedAttributesCount: number;
        flags: number;
        traceId: string;
        spanId: string;
      }[];
      schemaUrl: string;
    }[];
    schemaUrl: string;
  }[];
}
