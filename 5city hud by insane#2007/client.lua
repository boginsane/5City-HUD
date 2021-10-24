local display = true
local IsDead = false


local Status = true


Citizen.CreateThread(function()
    while true do
        Citizen.Wait(3)
        if IsControlJustReleased(1, 348) then
            SendNUIMessage({ type = 'TOGGLE_HUD' })
        end
    end
end)

UpdateVoice = function(mode, isTalking)
    SendNUIMessage({ type = 'UPDATE_VOICE', mode = mode, isTalking = isTalking })
end

AddEventHandler('playerSpawned', function()
	IsDead = false
end)

AddEventHandler('esx:onPlayerDeath', function(data)
	IsDead = true
end)

AddEventHandler('esx_status:setDisplay', function(val)
	display = tonumber(val) ~= 0
end)

Citizen.CreateThread(function()
    while true do 
        TriggerEvent('esx_status:getStatus', 'hunger', function(hungerstatus)
            TriggerEvent('esx_status:getStatus', 'thirst', function(thirststatus)
				TriggerEvent('esx_status:getStatus', 'stress', function(stressstatus)
                	hunger = hungerstatus.getPercent()
                	thirst = thirststatus.getPercent()
					stress = stressstatus.getPercent()
				end)
            end)
        end)
        Citizen.Wait(750)
    end
end)

Citizen.CreateThread(function()
    while true do
        if display then
            SendNUIMessage({
                type = 'UPDATE_STATUS',
                hunger = hunger,
                thirst = thirst,
				stress = stress,
                zycie = GetEntityHealth(PlayerPedId()),
                isdead = IsDead,
                nurkowanie = GetPlayerUnderwaterTimeRemaining(PlayerId()) * 10
            })
        else
            SendNUIMessage({ type = 'TOGGLE_HUD', bool = true })
            Citizen.Wait(500)
        end
        Citizen.Wait(500)
    end
end)