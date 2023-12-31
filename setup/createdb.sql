-- GAMES 

  create table
  public.games (
    id bigserial,
    name text not null,
    en_name text not null,
    publisher text null,
    developer text null,
    release_date text null,
    region text null,
    icon text null,
    background text null,
    pc_client boolean null,
    eos boolean null,
    new_release boolean not null default false,
    same_name boolean not null default false,
    same_slot numeric[] null,
    hidden boolean not null default false,
    blurhash text null,
    constraint games3_pkey primary key (id)
  ) tablespace pg_default;

-- MONTHLY DATA

  create table
  public.template (
    id bigint generated by default as identity,
    totalRevenue numeric null,
    androidRevenue numeric null,
    iosRevenue numeric null,
    totalDownloads numeric null,
    androidDownloads numeric null,
    iosDownloads numeric null,
    constraint template_pkey primary key (id)
  ) tablespace pg_default;

-- FEEDBACK

  create table
  public.feedback (
    id bigint generated by default as identity,
    created_at timestamp with time zone null default now(),
    content text not null,
    response text null,
    name text null,
    seen boolean null,
    constraint feedback_pkey primary key (id)
  ) tablespace pg_default;

-- GRAVEYARD
  create table
  public.graveyard (
    id bigint generated by default as identity,
    release_date date null,
    eos_date date null,
    maintenance boolean not null default false,
    trailer text null,
    constraint graveyard_pkey primary key (id),
    constraint graveyard_id_fkey foreign key (id) references games (id)
  ) tablespace pg_default;

  -- REVIEWS

  create table
  public.reviews (
    id bigint generated by default as identity,
    game_id bigint not null,
    user_id uuid not null,
    rating numeric not null,
    status text not null,
    investment text not null,
    text text not null,
    created_at timestamp with time zone not null default now(),
    constraint reviews_pkey primary key (id),
    constraint reviews_game_id_fkey foreign key (game_id) references games (id),
    constraint reviews_user_id_fkey foreign key (user_id) references users (id)
  ) tablespace pg_default;

  CREATE POLICY "policy_name"
    ON public.reviews
    FOR INSERT USING (
      auth.uid() = user_id
    )  WITH CHECK (
      auth.uid() = user_id
  );

  CREATE POLICY "policy_name"
    ON public.reviews
    FOR DELETE USING (
      auth.uid() = user_id
  );

-- CONFIG

  create table  
  public.config (
    id bigint generated by default as identity,
    tables text[] null,
    alerts text[] null,
    maintenance boolean null default false,
    "currentTable" text null,
    "previousTable" text null,
    "lastUpdated" date null,
    "graveyardBackground" text null,
    constraint config_pkey primary key (id)
  ) tablespace pg_default;