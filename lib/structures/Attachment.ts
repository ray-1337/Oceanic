import Base from "./Base";
import type Client from "../Client";
import type { RawAttachment } from "../types/channels";

/** Represents a file attachment. */
export default class Attachment extends Base {
	/** The mime type of this attachment. */
	contentType?: string;
	/** The description of this attachment. */
	description?: string;
	/** If this attachment is ephemeral. Ephemeral attachments will be removed after a set period of time. */
	ephemeral?: boolean;
	/** The filename of this attachment. */
	filename: string;
	/** The height of this attachment, if an image. */
	height?: number;
	/** A proxied url of this attachment. */
	proxyURL: string;
	/** The size of this attachment. */
	size: number;
	/** The source url of this attachment. */
	url: string;
	/** The width of this attachment, if an image. */
	width?: number;
	/** @hideconstructor */
	constructor(data: RawAttachment, client: Client) {
		super(data.id, client);
		this.update(data);
	}

	protected update(data: RawAttachment) {
		this.contentType = data.content_type;
		this.description = data.description;
		this.ephemeral   = data.ephemeral;
		this.filename    = data.filename;
		this.height      = data.height;
		this.proxyURL    = data.proxy_url;
		this.size        = data.size;
		this.url         = data.url;
		this.width       = data.width;
	}

	toJSON(props = []) {
		return super.toJSON([
			"contentType",
			"description",
			"ephemeral",
			"filename",
			"height",
			"proxyURL",
			"size",
			"url",
			"width",
			...props
		]);
	}
}
