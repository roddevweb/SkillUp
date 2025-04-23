var builder = WebApplication.CreateBuilder(args);

// Adiciona serviços ao contêiner.
builder.Services.AddControllers(); // Habilita o uso de API Controllers

// Configuração de CORS para desenvolvimento
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowReactDev",
        policy =>
        {
            policy.WithOrigins("http://localhost:3000") // Permite requisições do React Dev Server (ajuste a porta se necessário)
                  .AllowAnyHeader()
                  .AllowAnyMethod();
        });
});


// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configura o pipeline de requisições HTTP.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
    app.UseCors("AllowReactDev"); // Aplica a política de CORS em desenvolvimento
}

// app.UseHttpsRedirection(); // Vamos manter comentado por enquanto para simplificar

app.UseAuthorization();

app.MapControllers(); // Mapeia as rotas para os API Controllers

app.Run(); 