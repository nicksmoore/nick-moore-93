-- Create table for virtual cover letter profiles
CREATE TABLE public.virtual_profiles (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  type TEXT NOT NULL CHECK (type IN ('video', 'memoji', 'photo')),
  title TEXT NOT NULL,
  video_url TEXT,
  audio_url TEXT,
  photo_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.virtual_profiles ENABLE ROW LEVEL SECURITY;

-- Create policies for user access
CREATE POLICY "Users can view their own virtual profiles" 
ON public.virtual_profiles 
FOR SELECT 
USING (auth.uid() = user_id);

CREATE POLICY "Users can create their own virtual profiles" 
ON public.virtual_profiles 
FOR INSERT 
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own virtual profiles" 
ON public.virtual_profiles 
FOR UPDATE 
USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own virtual profiles" 
ON public.virtual_profiles 
FOR DELETE 
USING (auth.uid() = user_id);

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_virtual_profiles_updated_at
BEFORE UPDATE ON public.virtual_profiles
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();