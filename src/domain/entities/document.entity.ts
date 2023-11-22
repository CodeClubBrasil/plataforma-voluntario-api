import { EntityBase, EntityBaseData } from './entity-base';
import { DocumentType } from '@domain/enums';

export interface DocumentData extends EntityBaseData {
  documentType: DocumentType;
  fileName: string;
}

export class Document extends EntityBase {
  protected props: DocumentData;

  constructor(props: DocumentData) {
    super(props);
    this.props = {
      ...props,
    };
  }

  public get documentType(): DocumentType {
    return this.props.documentType;
  }
  public set documentType(documentType: DocumentType) {
    this.props.documentType = documentType;
  }

  public get fileName(): string {
    return this.props.fileName;
  }
  public set fileName(fileName: string) {
    this.props.fileName = fileName;
  }
}
