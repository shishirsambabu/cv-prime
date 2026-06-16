export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string;
          full_name: string | null;
          avatar_url: string | null;
          plan: 'free' | 'pro';
          linkedin_url: string | null;
          openrouter_key_enc: string | null;
          openrouter_key_hint: string | null;
          pdf_exports_used: number;
          created_at: string | null;
        };
        Insert: {
          id: string;
          full_name?: string | null;
          avatar_url?: string | null;
          plan?: 'free' | 'pro';
          linkedin_url?: string | null;
          openrouter_key_enc?: string | null;
          openrouter_key_hint?: string | null;
          pdf_exports_used?: number;
          created_at?: string | null;
        };
        Update: {
          id?: string;
          full_name?: string | null;
          avatar_url?: string | null;
          plan?: 'free' | 'pro';
          linkedin_url?: string | null;
          openrouter_key_enc?: string | null;
          openrouter_key_hint?: string | null;
          pdf_exports_used?: number;
          created_at?: string | null;
        };
        Relationships: [];
      };
      cvs: {
        Row: {
          id: string;
          user_id: string;
          title: string;
          template_id: string;
          data: Json;
          ats_score: number | null;
          ats_score_history: Json | null;
          is_public: boolean | null;
          last_edited: string | null;
          created_at: string | null;
        };
        Insert: {
          id?: string;
          user_id: string;
          title?: string;
          template_id?: string;
          data?: Json;
          ats_score?: number | null;
          ats_score_history?: Json | null;
          is_public?: boolean | null;
          last_edited?: string | null;
          created_at?: string | null;
        };
        Update: {
          id?: string;
          user_id?: string;
          title?: string;
          template_id?: string;
          data?: Json;
          ats_score?: number | null;
          ats_score_history?: Json | null;
          is_public?: boolean | null;
          last_edited?: string | null;
          created_at?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'cvs_user_id_fkey';
            columns: ['user_id'];
            referencedRelation: 'profiles';
            referencedColumns: ['id'];
          }
        ];
      };
      cover_letters: {
        Row: {
          id: string;
          user_id: string;
          cv_id: string | null;
          title: string;
          content: string | null;
          job_description: string | null;
          created_at: string | null;
        };
        Insert: {
          id?: string;
          user_id: string;
          cv_id?: string | null;
          title?: string;
          content?: string | null;
          job_description?: string | null;
          created_at?: string | null;
        };
        Update: {
          id?: string;
          user_id?: string;
          cv_id?: string | null;
          title?: string;
          content?: string | null;
          job_description?: string | null;
          created_at?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'cover_letters_cv_id_fkey';
            columns: ['cv_id'];
            referencedRelation: 'cvs';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'cover_letters_user_id_fkey';
            columns: ['user_id'];
            referencedRelation: 'profiles';
            referencedColumns: ['id'];
          }
        ];
      };
      job_applications: {
        Row: {
          id: string;
          user_id: string;
          cv_id: string | null;
          company: string;
          role: string;
          status: 'saved' | 'applied' | 'interview' | 'offer' | 'rejected';
          applied_date: string | null;
          notes: string | null;
          job_url: string | null;
          created_at: string | null;
        };
        Insert: {
          id?: string;
          user_id: string;
          cv_id?: string | null;
          company: string;
          role: string;
          status?: 'saved' | 'applied' | 'interview' | 'offer' | 'rejected';
          applied_date?: string | null;
          notes?: string | null;
          job_url?: string | null;
          created_at?: string | null;
        };
        Update: {
          id?: string;
          user_id?: string;
          cv_id?: string | null;
          company?: string;
          role?: string;
          status?: 'saved' | 'applied' | 'interview' | 'offer' | 'rejected';
          applied_date?: string | null;
          notes?: string | null;
          job_url?: string | null;
          created_at?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'job_applications_cv_id_fkey';
            columns: ['cv_id'];
            referencedRelation: 'cvs';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'job_applications_user_id_fkey';
            columns: ['user_id'];
            referencedRelation: 'profiles';
            referencedColumns: ['id'];
          }
        ];
      };
      payments: {
        Row: {
          id: string;
          user_id: string;
          gateway: 'razorpay' | 'cashfree';
          gateway_order_id: string | null;
          amount: number;
          currency: string;
          status: string;
          created_at: string | null;
        };
        Insert: {
          id?: string;
          user_id: string;
          gateway: 'razorpay' | 'cashfree';
          gateway_order_id?: string | null;
          amount: number;
          currency?: string;
          status?: string;
          created_at?: string | null;
        };
        Update: {
          id?: string;
          user_id?: string;
          gateway?: 'razorpay' | 'cashfree';
          gateway_order_id?: string | null;
          amount?: number;
          currency?: string;
          status?: string;
          created_at?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'payments_user_id_fkey';
            columns: ['user_id'];
            referencedRelation: 'profiles';
            referencedColumns: ['id'];
          }
        ];
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
    CompositeTypes: Record<string, never>;
  };
}
