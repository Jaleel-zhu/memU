/**
 * MemU SDK Data Models
 * 
 * Defines request and response models for MemU API interactions.
 */

/**
 * Request model for memorize conversation API
 * Either conversationText or conversation must be provided
 */
export interface MemorizeRequest {
  /** Conversation to memorize in plain text format */
  conversationText?: string;
  /** Conversation to memorize in role-content format */
  conversation?: Array<{ role: string; content: string }>;
  /** User identifier */
  userId: string;
  /** User display name */
  userName: string;
  /** Agent identifier */
  agentId: string;
  /** Agent display name */
  agentName: string;
  /** Session date in ISO 8601 format */
  sessionDate?: string;
}

/**
 * Response model for memorize conversation API
 */
export interface MemorizeResponse {
  /** Celery task ID for tracking */
  taskId: string;
  /** Task status */
  status: string;
  /** Response message */
  message: string;
}

/**
 * Response model for memorize task status API
 */
export interface MemorizeTaskStatusResponse {
  /** Celery task ID */
  taskId: string;
  /** Task status (e.g., PENDING, SUCCESS, FAILURE) */
  status: string;
  /** Detail information */
  detailInfo?: string;
}

/**
 * Error detail model for validation errors
 */
export interface ErrorDetail {
  /** Error location */
  loc: any[];
  /** Error message */
  msg: string;
  /** Error type */
  type: string;
}

/**
 * Validation error response model
 */
export interface ValidationError {
  /** List of validation errors */
  detail: ErrorDetail[];
}

// ========== New Retrieve API Models ==========

/**
 * Request model for default categories API
 * From 0.1.10, return summary becomes the default behavior
 * Set wantMemoryItems to true to request also raw memory items
 */
export interface DefaultCategoriesRequest {
  /** User ID */
  userId: string;
  /** Agent ID */
  agentId?: string;
  /** Request also raw memory items */
  wantMemoryItems?: boolean;
}

/**
 * Memory item model
 */
export interface MemoryItem {
  /** Memory identifier */
  memoryId: string;
  /** Memory category */
  category: string;
  /** Memory content */
  content: string;
  /** When the memory happened */
  happenedAt: Date;
  /** When the memory was created */
  createdAt: Date;
  /** When the memory was last updated */
  updatedAt: Date;
}

/**
 * Category memory items model
 */
export interface CategoryMemoryItems {
  /** Memory items */
  memories: MemoryItem[];
  /** Number of memory items */
  memoryCount: number;
}

/**
 * Category response model
 */
export interface CategoryResponse {
  /** Category name */
  name: string;
  /** Category type */
  type: string;
  /** User ID */
  userId?: string;
  /** Agent ID */
  agentId?: string;
  /** Category description */
  description?: string;
  /** Memory items in this category */
  memoryItems?: CategoryMemoryItems | null;
  /** Memory summarization for this category */
  summary?: string | null;
}

/**
 * Response model for default categories API
 */
export interface DefaultCategoriesResponse {
  /** List of category objects */
  categories: CategoryResponse[];
  /** Total number of categories */
  totalCategories: number;
}

/**
 * Request model for related memory items API
 */
export interface RelatedMemoryItemsRequest {
  /** User identifier */
  userId: string;
  /** Agent identifier */
  agentId?: string;
  /** Search query */
  query: string;
  /** Number of top results to return */
  topK?: number;
  /** Minimum similarity threshold */
  minSimilarity?: number;
  /** Categories to include in search */
  includeCategories?: string[];
}

/**
 * Related memory with similarity score
 */
export interface RelatedMemory {
  /** Memory item */
  memory: MemoryItem;
  /** User identifier */
  userId?: string;
  /** Agent identifier */
  agentId?: string;
  /** Similarity score */
  similarityScore: number;
}

/**
 * Response model for related memory items API
 */
export interface RelatedMemoryItemsResponse {
  /** List of related memories */
  relatedMemories: RelatedMemory[];
  /** Original search query */
  query: string;
  /** Total number of memories found */
  totalFound: number;
  /** Search parameters used */
  searchParams: Record<string, any>;
}

/**
 * Request model for related clustered categories API
 */
export interface RelatedClusteredCategoriesRequest {
  /** User identifier */
  userId: string;
  /** Agent identifier */
  agentId?: string;
  /** Category search query */
  categoryQuery: string;
  /** Number of top categories to return */
  topK?: number;
  /** Minimum similarity threshold */
  minSimilarity?: number;
  /** Request summary instead of raw memory items */
  wantSummary?: boolean;
}

/**
 * Clustered category with memories
 */
export interface ClusteredCategory {
  /** Category name */
  name: string;
  /** User identifier */
  userId?: string;
  /** Agent identifier */
  agentId?: string;
  /** Similarity score */
  similarityScore: number;
  /** Memories in this category */
  memories?: MemoryItem[] | null;
  /** Number of memories in category */
  memoryCount?: number | null;
  /** Memory summarization for this category */
  summary?: string | null;
}

/**
 * Response model for related clustered categories API
 */
export interface RelatedClusteredCategoriesResponse {
  /** List of clustered categories */
  clusteredCategories: ClusteredCategory[];
  /** Original category query */
  categoryQuery: string;
  /** Total categories found */
  totalCategoriesFound: number;
  /** Search parameters used */
  searchParams: Record<string, any>;
}

// ========== Delete Memory API Models ==========

/**
 * Request model for delete memory API
 */
export interface DeleteMemoryRequest {
  /** User identifier */
  userId: string;
  /** Agent identifier (optional, delete all user memories if not provided) */
  agentId?: string;
}

/**
 * Response model for delete memory API
 */
export interface DeleteMemoryResponse {
  /** Operation success status */
  success: boolean;
  /** Number of memories deleted */
  deletedCount?: number;
}

// ========== Task Summary Ready API Models ==========

/**
 * Request model for memorize task summary ready API
 */
export interface MemorizeTaskSummaryReadyRequest {
  /** Category group to query */
  group?: string;
}

/**
 * Response model for memorize task summary ready API
 */
export interface MemorizeTaskSummaryReadyResponse {
  /** Whether all summaries are ready */
  allReady: boolean;
  /** Whether each category is ready */
  categoryReady: Record<string, boolean>;
}
