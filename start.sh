#!/bin/bash

# 自定义 Gemini API 配置脚本
# 根据提供的 curl 命令配置环境变量

# 从 curl 命令中提取的配置
# API Base URL: 去掉 /chat/completions 部分，保留到 deployments/gemini-2.5-pro
export CUSTOM_API_BASE="https://genai-sg-og.tiktok-row.org/gpt/openapi/online/v2/crawl/openai/deployments/gemini-2.5-pro"
export CUSTOM_API_KEY="mk0ZPuWkUXw7cvBxdQuFSxg03Tv9r3Uw_GPT_AK"
export CUSTOM_MODEL="gemini-2.5-pro"

# 使用 Azure OpenAI 格式（因为它也使用 api-key header）
# LiteLlm 支持 Azure OpenAI 格式，格式为: azure/gpt-4
export AZURE_API_KEY="${CUSTOM_API_KEY}"
export AZURE_API_BASE="${CUSTOM_API_BASE}"
export AZURE_API_VERSION="2024-03-01-preview"
export LITELLM_MODEL="azure/${CUSTOM_MODEL}"

# 同时设置 OpenAI 格式作为备用（如果 Azure 格式不工作）
export LITELLM_API_BASE="${CUSTOM_API_BASE}"
export OPENAI_API_KEY="${CUSTOM_API_KEY}"

# 设置 GEMINI_API_KEY（用于兼容性检查）
export GEMINI_API_KEY="${CUSTOM_API_KEY}"

# 设置 GEMINI_API_KEY（用于兼容性检查，实际使用 OPENAI_API_KEY）
export GEMINI_API_KEY="${CUSTOM_API_KEY}"

# 禁用 Vertex AI（使用自定义 API）
export GOOGLE_GENAI_USE_VERTEXAI="FALSE"

