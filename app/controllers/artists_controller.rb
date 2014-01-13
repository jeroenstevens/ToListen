class ArtistsController < ApplicationController
  before_action :set_artist, only: [:show, :edit, :update, :destroy]
  respond_to :json

  def index
    respond_with Artist.all
  end

  def show
    respond_with @artist
  end

  def create
    respond_with Artist.create(artist_params)
  end

  def update
    render json: @artist, status: :ok if @artist.update(artist_params)
  end

  def destroy
    #respond_with @artist.destroy
    render json: nil, status: :ok if @artist.destroy
  end

private
  def set_artist
    @artist = Artist.find(params[:id])
  end

  def artist_params
    params.require(:artist).permit(:name, :listened)
  end
end