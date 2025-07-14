export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instanciate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.3 (519615d)"
  }
  public: {
    Tables: {
      audio_files: {
        Row: {
          created_at: string
          file_name: string
          google_drive_file_id: string | null
          id: string
          is_published: boolean
          metadata: Json | null
          source_pdf: string | null
          supabase_url: string | null
          updated_at: string
          uploaded_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          file_name: string
          google_drive_file_id?: string | null
          id?: string
          is_published?: boolean
          metadata?: Json | null
          source_pdf?: string | null
          supabase_url?: string | null
          updated_at?: string
          uploaded_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          file_name?: string
          google_drive_file_id?: string | null
          id?: string
          is_published?: boolean
          metadata?: Json | null
          source_pdf?: string | null
          supabase_url?: string | null
          updated_at?: string
          uploaded_at?: string
          user_id?: string
        }
        Relationships: []
      }
      gamification_metrics: {
        Row: {
          current_streak_days: number | null
          engagement_score: number | null
          experience_points: number | null
          id: string
          level: number | null
          longest_streak_days: number | null
          total_audio_recorded: number | null
          total_feedback_implemented: number | null
          total_stories_created: number | null
          total_visuals_added: number | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          current_streak_days?: number | null
          engagement_score?: number | null
          experience_points?: number | null
          id?: string
          level?: number | null
          longest_streak_days?: number | null
          total_audio_recorded?: number | null
          total_feedback_implemented?: number | null
          total_stories_created?: number | null
          total_visuals_added?: number | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          current_streak_days?: number | null
          engagement_score?: number | null
          experience_points?: number | null
          id?: string
          level?: number | null
          longest_streak_days?: number | null
          total_audio_recorded?: number | null
          total_feedback_implemented?: number | null
          total_stories_created?: number | null
          total_visuals_added?: number | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      interviews: {
        Row: {
          calendly_event_id: string | null
          created_at: string
          id: string
          interview_title: string
          interviewer_name: string
          interviewer_phone: string
          scheduled_time: string
          status: string
          updated_at: string
          user_id: string
        }
        Insert: {
          calendly_event_id?: string | null
          created_at?: string
          id?: string
          interview_title: string
          interviewer_name: string
          interviewer_phone: string
          scheduled_time: string
          status?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          calendly_event_id?: string | null
          created_at?: string
          id?: string
          interview_title?: string
          interviewer_name?: string
          interviewer_phone?: string
          scheduled_time?: string
          status?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      podcast_jobs: {
        Row: {
          audio_url: string | null
          created_at: string | null
          error_message: string | null
          id: string
          linkedin_profile_url: string
          metadata: Json | null
          profile_data: Json | null
          status: string
          transcript: string | null
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          audio_url?: string | null
          created_at?: string | null
          error_message?: string | null
          id?: string
          linkedin_profile_url: string
          metadata?: Json | null
          profile_data?: Json | null
          status?: string
          transcript?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          audio_url?: string | null
          created_at?: string | null
          error_message?: string | null
          id?: string
          linkedin_profile_url?: string
          metadata?: Json | null
          profile_data?: Json | null
          status?: string
          transcript?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      podcasts: {
        Row: {
          audio_elements: Json | null
          audio_url: string | null
          completion_percentage: number | null
          created_at: string | null
          description: string | null
          feedback_data: Json | null
          gamification_progress: Json | null
          id: string
          interactive_paths: Json | null
          is_public: boolean | null
          narrative_tone: string | null
          narrative_variations: Json | null
          package_type: string
          premium_assets: boolean | null
          resume_content: string | null
          social_assets: Json | null
          status: string | null
          target_audience: string | null
          title: string
          transcript: string | null
          updated_at: string | null
          user_id: string
          visual_assets: Json | null
          voice_clone: boolean | null
        }
        Insert: {
          audio_elements?: Json | null
          audio_url?: string | null
          completion_percentage?: number | null
          created_at?: string | null
          description?: string | null
          feedback_data?: Json | null
          gamification_progress?: Json | null
          id?: string
          interactive_paths?: Json | null
          is_public?: boolean | null
          narrative_tone?: string | null
          narrative_variations?: Json | null
          package_type: string
          premium_assets?: boolean | null
          resume_content?: string | null
          social_assets?: Json | null
          status?: string | null
          target_audience?: string | null
          title: string
          transcript?: string | null
          updated_at?: string | null
          user_id: string
          visual_assets?: Json | null
          voice_clone?: boolean | null
        }
        Update: {
          audio_elements?: Json | null
          audio_url?: string | null
          completion_percentage?: number | null
          created_at?: string | null
          description?: string | null
          feedback_data?: Json | null
          gamification_progress?: Json | null
          id?: string
          interactive_paths?: Json | null
          is_public?: boolean | null
          narrative_tone?: string | null
          narrative_variations?: Json | null
          package_type?: string
          premium_assets?: boolean | null
          resume_content?: string | null
          social_assets?: Json | null
          status?: string | null
          target_audience?: string | null
          title?: string
          transcript?: string | null
          updated_at?: string | null
          user_id?: string
          visual_assets?: Json | null
          voice_clone?: boolean | null
        }
        Relationships: []
      }
      profiles: {
        Row: {
          avatar_url: string | null
          created_at: string | null
          email: string | null
          full_name: string | null
          google_access_token: string | null
          google_refresh_token: string | null
          google_token_expires_at: string | null
          id: string
          updated_at: string | null
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string | null
          email?: string | null
          full_name?: string | null
          google_access_token?: string | null
          google_refresh_token?: string | null
          google_token_expires_at?: string | null
          id: string
          updated_at?: string | null
        }
        Update: {
          avatar_url?: string | null
          created_at?: string | null
          email?: string | null
          full_name?: string | null
          google_access_token?: string | null
          google_refresh_token?: string | null
          google_token_expires_at?: string | null
          id?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      security_audit_log: {
        Row: {
          action_details: Json | null
          created_at: string | null
          event_data: Json | null
          event_type: string
          geo_location: Json | null
          id: string
          ip_address: unknown | null
          risk_level: string | null
          session_id: string | null
          user_agent: string | null
          user_id: string | null
        }
        Insert: {
          action_details?: Json | null
          created_at?: string | null
          event_data?: Json | null
          event_type: string
          geo_location?: Json | null
          id?: string
          ip_address?: unknown | null
          risk_level?: string | null
          session_id?: string | null
          user_agent?: string | null
          user_id?: string | null
        }
        Update: {
          action_details?: Json | null
          created_at?: string | null
          event_data?: Json | null
          event_type?: string
          geo_location?: Json | null
          id?: string
          ip_address?: unknown | null
          risk_level?: string | null
          session_id?: string | null
          user_agent?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      sharing_logs: {
        Row: {
          id: string
          platform: string
          podcast_id: string
          share_url: string | null
          shared_at: string | null
        }
        Insert: {
          id?: string
          platform: string
          podcast_id: string
          share_url?: string | null
          shared_at?: string | null
        }
        Update: {
          id?: string
          platform?: string
          podcast_id?: string
          share_url?: string | null
          shared_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "sharing_logs_podcast_id_fkey"
            columns: ["podcast_id"]
            isOneToOne: false
            referencedRelation: "podcasts"
            referencedColumns: ["id"]
          },
        ]
      }
      sms_notifications: {
        Row: {
          delivery_status: string | null
          error_message: string | null
          id: string
          interview_id: string
          message_content: string
          notification_type: string
          phone_number: string
          provider_message_id: string | null
          sent_at: string
        }
        Insert: {
          delivery_status?: string | null
          error_message?: string | null
          id?: string
          interview_id: string
          message_content: string
          notification_type: string
          phone_number: string
          provider_message_id?: string | null
          sent_at?: string
        }
        Update: {
          delivery_status?: string | null
          error_message?: string | null
          id?: string
          interview_id?: string
          message_content?: string
          notification_type?: string
          phone_number?: string
          provider_message_id?: string | null
          sent_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "sms_notifications_interview_id_fkey"
            columns: ["interview_id"]
            isOneToOne: false
            referencedRelation: "interviews"
            referencedColumns: ["id"]
          },
        ]
      }
      story_analytics: {
        Row: {
          created_at: string | null
          event_data: Json | null
          event_type: string
          id: string
          ip_address: unknown | null
          podcast_id: string
          referrer: string | null
          session_id: string | null
          story_path_id: string | null
          user_agent: string | null
        }
        Insert: {
          created_at?: string | null
          event_data?: Json | null
          event_type: string
          id?: string
          ip_address?: unknown | null
          podcast_id: string
          referrer?: string | null
          session_id?: string | null
          story_path_id?: string | null
          user_agent?: string | null
        }
        Update: {
          created_at?: string | null
          event_data?: Json | null
          event_type?: string
          id?: string
          ip_address?: unknown | null
          podcast_id?: string
          referrer?: string | null
          session_id?: string | null
          story_path_id?: string | null
          user_agent?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "story_analytics_podcast_id_fkey"
            columns: ["podcast_id"]
            isOneToOne: false
            referencedRelation: "podcasts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "story_analytics_story_path_id_fkey"
            columns: ["story_path_id"]
            isOneToOne: false
            referencedRelation: "story_paths"
            referencedColumns: ["id"]
          },
        ]
      }
      story_feedback: {
        Row: {
          created_at: string | null
          feedback_category: string | null
          feedback_content: Json
          feedback_source: string | null
          feedback_type: string
          id: string
          is_implemented: boolean | null
          podcast_id: string
          priority_score: number | null
        }
        Insert: {
          created_at?: string | null
          feedback_category?: string | null
          feedback_content: Json
          feedback_source?: string | null
          feedback_type: string
          id?: string
          is_implemented?: boolean | null
          podcast_id: string
          priority_score?: number | null
        }
        Update: {
          created_at?: string | null
          feedback_category?: string | null
          feedback_content?: Json
          feedback_source?: string | null
          feedback_type?: string
          id?: string
          is_implemented?: boolean | null
          podcast_id?: string
          priority_score?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "story_feedback_podcast_id_fkey"
            columns: ["podcast_id"]
            isOneToOne: false
            referencedRelation: "podcasts"
            referencedColumns: ["id"]
          },
        ]
      }
      story_paths: {
        Row: {
          audio_cues: Json | null
          created_at: string | null
          engagement_metrics: Json | null
          id: string
          is_active: boolean | null
          narrative_content: string
          path_name: string
          podcast_id: string
          target_audience: string
          updated_at: string | null
          visual_layout: Json | null
        }
        Insert: {
          audio_cues?: Json | null
          created_at?: string | null
          engagement_metrics?: Json | null
          id?: string
          is_active?: boolean | null
          narrative_content: string
          path_name: string
          podcast_id: string
          target_audience: string
          updated_at?: string | null
          visual_layout?: Json | null
        }
        Update: {
          audio_cues?: Json | null
          created_at?: string | null
          engagement_metrics?: Json | null
          id?: string
          is_active?: boolean | null
          narrative_content?: string
          path_name?: string
          podcast_id?: string
          target_audience?: string
          updated_at?: string | null
          visual_layout?: Json | null
        }
        Relationships: [
          {
            foreignKeyName: "story_paths_podcast_id_fkey"
            columns: ["podcast_id"]
            isOneToOne: false
            referencedRelation: "podcasts"
            referencedColumns: ["id"]
          },
        ]
      }
      story_templates: {
        Row: {
          category: string
          created_at: string | null
          id: string
          industry_specific: boolean | null
          is_active: boolean | null
          name: string
          target_audiences: string[] | null
          template_structure: Json
          tone_variations: Json | null
          updated_at: string | null
        }
        Insert: {
          category: string
          created_at?: string | null
          id?: string
          industry_specific?: boolean | null
          is_active?: boolean | null
          name: string
          target_audiences?: string[] | null
          template_structure: Json
          tone_variations?: Json | null
          updated_at?: string | null
        }
        Update: {
          category?: string
          created_at?: string | null
          id?: string
          industry_specific?: boolean | null
          is_active?: boolean | null
          name?: string
          target_audiences?: string[] | null
          template_structure?: Json
          tone_variations?: Json | null
          updated_at?: string | null
        }
        Relationships: []
      }
      test_results: {
        Row: {
          audio_url: string | null
          created_at: string
          error_message: string | null
          generated_script: string | null
          id: string
          profile_data: Json | null
          success_rate: string | null
          target_url: string | null
          test_name: string
          test_status: string
          test_timestamp: string
          updated_at: string
          validation_checks: Json | null
        }
        Insert: {
          audio_url?: string | null
          created_at?: string
          error_message?: string | null
          generated_script?: string | null
          id?: string
          profile_data?: Json | null
          success_rate?: string | null
          target_url?: string | null
          test_name: string
          test_status: string
          test_timestamp: string
          updated_at?: string
          validation_checks?: Json | null
        }
        Update: {
          audio_url?: string | null
          created_at?: string
          error_message?: string | null
          generated_script?: string | null
          id?: string
          profile_data?: Json | null
          success_rate?: string | null
          target_url?: string | null
          test_name?: string
          test_status?: string
          test_timestamp?: string
          updated_at?: string
          validation_checks?: Json | null
        }
        Relationships: []
      }
      user_achievements: {
        Row: {
          achievement_data: Json | null
          achievement_type: string
          earned_at: string | null
          id: string
          podcast_id: string | null
          user_id: string
        }
        Insert: {
          achievement_data?: Json | null
          achievement_type: string
          earned_at?: string | null
          id?: string
          podcast_id?: string | null
          user_id: string
        }
        Update: {
          achievement_data?: Json | null
          achievement_type?: string
          earned_at?: string | null
          id?: string
          podcast_id?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_achievements_podcast_id_fkey"
            columns: ["podcast_id"]
            isOneToOne: false
            referencedRelation: "podcasts"
            referencedColumns: ["id"]
          },
        ]
      }
      virtual_profiles: {
        Row: {
          audio_url: string | null
          created_at: string
          id: string
          photo_url: string | null
          title: string
          type: string
          updated_at: string
          user_id: string
          video_url: string | null
        }
        Insert: {
          audio_url?: string | null
          created_at?: string
          id?: string
          photo_url?: string | null
          title: string
          type: string
          updated_at?: string
          user_id: string
          video_url?: string | null
        }
        Update: {
          audio_url?: string | null
          created_at?: string
          id?: string
          photo_url?: string | null
          title?: string
          type?: string
          updated_at?: string
          user_id?: string
          video_url?: string | null
        }
        Relationships: []
      }
      visual_assets: {
        Row: {
          asset_type: string
          category: string | null
          color_scheme: Json | null
          created_at: string | null
          dimensions: Json | null
          file_url: string
          id: string
          is_custom: boolean | null
          metadata: Json | null
          thumbnail_url: string | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          asset_type: string
          category?: string | null
          color_scheme?: Json | null
          created_at?: string | null
          dimensions?: Json | null
          file_url: string
          id?: string
          is_custom?: boolean | null
          metadata?: Json | null
          thumbnail_url?: string | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          asset_type?: string
          category?: string | null
          color_scheme?: Json | null
          created_at?: string | null
          dimensions?: Json | null
          file_url?: string
          id?: string
          is_custom?: boolean | null
          metadata?: Json | null
          thumbnail_url?: string | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      workflow_logs: {
        Row: {
          created_at: string | null
          data: Json | null
          execution_time_ms: number | null
          id: string
          job_id: string | null
          status: string
          step_name: string
        }
        Insert: {
          created_at?: string | null
          data?: Json | null
          execution_time_ms?: number | null
          id?: string
          job_id?: string | null
          status: string
          step_name: string
        }
        Update: {
          created_at?: string | null
          data?: Json | null
          execution_time_ms?: number | null
          id?: string
          job_id?: string | null
          status?: string
          step_name?: string
        }
        Relationships: [
          {
            foreignKeyName: "workflow_logs_job_id_fkey"
            columns: ["job_id"]
            isOneToOne: false
            referencedRelation: "podcast_jobs"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      is_podcast_owner: {
        Args: { podcast_id: string; user_id: string }
        Returns: boolean
      }
      log_security_event: {
        Args: {
          p_event_type: string
          p_user_id?: string
          p_event_data?: Json
          p_risk_level?: string
          p_ip_address?: unknown
          p_user_agent?: string
        }
        Returns: string
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
