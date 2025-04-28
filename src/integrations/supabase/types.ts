export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      blood_inventory: {
        Row: {
          blood_type: Database["public"]["Enums"]["blood_type"]
          created_at: string
          expiry_date: string
          id: string
          location: string
          quantity_ml: number
          updated_at: string
        }
        Insert: {
          blood_type: Database["public"]["Enums"]["blood_type"]
          created_at?: string
          expiry_date: string
          id?: string
          location: string
          quantity_ml?: number
          updated_at?: string
        }
        Update: {
          blood_type?: Database["public"]["Enums"]["blood_type"]
          created_at?: string
          expiry_date?: string
          id?: string
          location?: string
          quantity_ml?: number
          updated_at?: string
        }
        Relationships: []
      }
      blood_requests: {
        Row: {
          blood_type: Database["public"]["Enums"]["blood_type"]
          created_at: string
          hospital: string
          id: string
          quantity_ml: number
          requester_email: string
          requester_name: string
          requester_phone: string
          status: string
          updated_at: string
          urgency: string
        }
        Insert: {
          blood_type: Database["public"]["Enums"]["blood_type"]
          created_at?: string
          hospital: string
          id?: string
          quantity_ml: number
          requester_email: string
          requester_name: string
          requester_phone: string
          status?: string
          updated_at?: string
          urgency: string
        }
        Update: {
          blood_type?: Database["public"]["Enums"]["blood_type"]
          created_at?: string
          hospital?: string
          id?: string
          quantity_ml?: number
          requester_email?: string
          requester_name?: string
          requester_phone?: string
          status?: string
          updated_at?: string
          urgency?: string
        }
        Relationships: []
      }
      donation_records: {
        Row: {
          blood_type: Database["public"]["Enums"]["blood_type"]
          created_at: string
          donation_date: string
          donor_id: string | null
          id: string
          location: string
          quantity_ml: number
        }
        Insert: {
          blood_type: Database["public"]["Enums"]["blood_type"]
          created_at?: string
          donation_date: string
          donor_id?: string | null
          id?: string
          location: string
          quantity_ml: number
        }
        Update: {
          blood_type?: Database["public"]["Enums"]["blood_type"]
          created_at?: string
          donation_date?: string
          donor_id?: string | null
          id?: string
          location?: string
          quantity_ml?: number
        }
        Relationships: [
          {
            foreignKeyName: "donation_records_donor_id_fkey"
            columns: ["donor_id"]
            isOneToOne: false
            referencedRelation: "donors"
            referencedColumns: ["id"]
          },
        ]
      }
      donors: {
        Row: {
          blood_type: Database["public"]["Enums"]["blood_type"]
          created_at: string
          date_of_birth: string
          email: string
          full_name: string
          id: string
          phone_number: string
          previous_donor: boolean
          updated_at: string
        }
        Insert: {
          blood_type: Database["public"]["Enums"]["blood_type"]
          created_at?: string
          date_of_birth: string
          email: string
          full_name: string
          id?: string
          phone_number: string
          previous_donor?: boolean
          updated_at?: string
        }
        Update: {
          blood_type?: Database["public"]["Enums"]["blood_type"]
          created_at?: string
          date_of_birth?: string
          email?: string
          full_name?: string
          id?: string
          phone_number?: string
          previous_donor?: boolean
          updated_at?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      blood_type: "A+" | "A-" | "B+" | "B-" | "AB+" | "AB-" | "O+" | "O-"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
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
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
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
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
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
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      blood_type: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
    },
  },
} as const
